'use client';

import React, { useState, useEffect, useRef } from 'react';
import { auth, db, googleProvider, cloudinaryConfig } from '@/lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, orderBy, limit, onSnapshot, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  
  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  
  // Upload states
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ pct: 0, text: '' });
  const [submitting, setSubmitting] = useState(false);
  
  // Recent posts
  const [recentPosts, setRecentPosts] = useState([]);
  
  // Toast notification
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const toastTimerRef = useRef(null);
  
  // File input ref
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  // Auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch recent posts
  useEffect(() => {
    if (!user) {
      setRecentPosts([]);
      return;
    }

    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snap) => {
      const posts = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      }));
      setRecentPosts(posts);
    }, (err) => {
      console.error(err);
      showToast('Error loading posts: ' + err.message, 'error');
    });

    return () => unsubscribe();
  }, [user]);

  // Handle preview URLs cleanup
  useEffect(() => {
    return () => {
      previews.forEach(p => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  const showToast = (message, type = '') => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({ show: true, message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3500);
  };

  const handleSignIn = async () => {
    setSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      showToast('Sign-in failed. Try again.', 'error');
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length) {
      addFiles(e.target.files);
    }
  };

  const addFiles = (fileList) => {
    const filesArray = Array.from(fileList);
    const newFiles = [...selectedFiles, ...filesArray];
    setSelectedFiles(newFiles);

    // Create preview objects
    const newPreviews = filesArray.map(file => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video/') ? 'video' : 'image',
      name: file.name
    }));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeFile = (index) => {
    // Revoke object URL to prevent memory leaks
    if (previews[index]) {
      URL.revokeObjectURL(previews[index].url);
    }

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const updatedPreviews = [...previews];
    updatedPreviews.splice(index, 1);
    setPreviews(updatedPreviews);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const clearAllMedia = () => {
    previews.forEach(p => URL.revokeObjectURL(p.url));
    setSelectedFiles([]);
    setPreviews([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      addFiles(e.dataTransfer.files);
    }
  };

  const uploadFileToCloudinary = (file, idx, total) => {
    return new Promise((resolve, reject) => {
      const isVid = file.type.startsWith('video/');
      const resourceType = isVid ? 'video' : 'image';
      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', cloudinaryConfig.uploadPreset);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/${resourceType}/upload`);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const pct = Math.round((e.loaded / e.total) * 100);
          setUploadProgress({
            pct,
            text: `Uploading file ${idx + 1} of ${total}… ${pct}%`
          });
        }
      };

      xhr.onload = () => {
        try {
          const data = JSON.parse(xhr.responseText);
          if (xhr.status === 200) {
            resolve({ url: data.secure_url, type: isVid ? 'video' : 'image' });
          } else {
            reject(new Error(data.error?.message || 'Upload failed'));
          }
        } catch (err) {
          reject(new Error('Failed to parse Cloudinary response'));
        }
      };

      xhr.onerror = () => reject(new Error('Network error during upload'));
      xhr.send(fd);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    const cleanDesc = description.trim();

    if (!cleanTitle || !cleanDesc) {
      showToast('Please fill in title and description.', 'error');
      return;
    }

    setSubmitting(true);
    setUploading(true);
    setUploadProgress({ pct: 0, text: 'Starting upload…' });

    try {
      const uploadedMedia = [];

      if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
          const result = await uploadFileToCloudinary(selectedFiles[i], i, selectedFiles.length);
          uploadedMedia.push(result);
        }
      }

      setUploading(false);

      await addDoc(collection(db, 'news'), {
        title: cleanTitle,
        description: cleanDesc,
        media: uploadedMedia,
        createdAt: serverTimestamp(),
        postedBy: user.email
      });

      // Reset form
      setTitle('');
      setDescription('');
      clearAllMedia();
      showToast(`Posted! ${uploadedMedia.length ? `${uploadedMedia.length} file${uploadedMedia.length > 1 ? 's' : ''} uploaded.` : ''}`, 'success');

    } catch (err) {
      console.error(err);
      showToast('Error: ' + err.message, 'error');
      setUploading(false);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm('Delete this post? This cannot be undone.')) return;
    try {
      await deleteDoc(doc(db, 'news', id));
      showToast('Deleted.', 'success');
    } catch (err) {
      showToast('Delete failed: ' + err.message, 'error');
    }
  };

  const getPostDateText = (post) => {
    if (!post.createdAt) return 'just now';
    try {
      const d = post.createdAt.toDate();
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (err) {
      return 'just now';
    }
  };

  if (loadingUser) {
    return (
      <div className="admin-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
        <div style={{ textAlign: 'center', color: 'var(--admin-muted)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏳</div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase' }}>Loading Session…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {/* ── Auth Gate ── */}
      {!user ? (
        <div id="auth-gate">
          <img src="/logo-mark.png" alt="AshaJyothi" className="auth-logo" />
          <p className="auth-org">AshaJyothi India</p>
          <h1 className="auth-title">Post a news update</h1>
          <p className="auth-sub">Sign in with your Google account to share photos, videos and stories from the campus.</p>
          <button id="sign-in-btn" onClick={handleSignIn} disabled={signingIn}>
            <svg className="g-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            {signingIn ? 'Signing in…' : 'Continue with Google'}
          </button>
        </div>
      ) : (
        /* ── Admin Panel ── */
        <div id="admin-panel">
          <header className="adm-header">
            <div className="row">
              <div className="adm-brand">
                <img src="/logo-mark.png" alt="" />
                <div className="adm-brand-text">
                  <span>AshaJyothi</span>
                  <small>News Admin</small>
                </div>
              </div>
              <div className="user-row">
                <img className="user-avatar" src={user.photoURL || ''} alt={user.displayName || ''} />
                <span className="user-name">{user.displayName || user.email}</span>
                <button id="sign-out-btn" onClick={handleSignOut}>Sign out</button>
              </div>
            </div>
          </header>

          <main className="adm-main">
            {/* Post form */}
            <div className="form-section">
              <div className="form-label">New update</div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="field" htmlFor="post-title">Title</label>
                  <input
                    type="text"
                    id="post-title"
                    placeholder="e.g. New arrival — welcome Priya!"
                    maxLength={120}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <div className="char-count"><span>{title.length}</span> / 120</div>
                </div>

                <div className="form-group">
                  <label className="field" htmlFor="post-desc">Description</label>
                  <textarea
                    id="post-desc"
                    placeholder="Share what happened — a milestone, a celebration, a moment worth remembering."
                    maxLength={600}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                  <div className="char-count"><span>{description.length}</span> / 600</div>
                </div>

                <div className="form-group">
                  <label className="field">
                    Photos or videos <span style={{ fontWeight: '400', color: 'var(--admin-muted)' }}>(optional · multiple allowed)</span>
                  </label>
                  
                  {previews.length === 0 ? (
                    <div
                      className={`media-drop ${dragOver ? 'drag-over' : ''}`}
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,video/*"
                        multiple
                        style={{ display: 'none' }}
                      />
                      <div className="drop-icon">📷</div>
                      <div className="drop-label">Tap to add photos or videos</div>
                      <div className="drop-sub">JPG, PNG, GIF, MP4, MOV · select as many as you like</div>
                    </div>
                  ) : (
                    <div id="media-preview">
                      <div className="preview-grid">
                        {previews.map((preview, i) => (
                          <div key={i} className="preview-tile">
                            {preview.type === 'video' ? (
                              <video src={preview.url} muted playsInline></video>
                            ) : (
                              <img src={preview.url} alt="" />
                            )}
                            <button className="tile-remove" onClick={() => removeFile(i)} type="button">✕</button>
                          </div>
                        ))}
                      </div>
                      <div className="preview-bar">
                        <span>{previews.length} file{previews.length > 1 ? 's' : ''} selected</span>
                        <button className="remove-media" type="button" onClick={clearAllMedia}>Clear all ✕</button>
                      </div>
                    </div>
                  )}

                  {uploading && (
                    <div className="upload-progress">
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${uploadProgress.pct}%` }}></div>
                      </div>
                      <div className="progress-lbl">{uploadProgress.text}</div>
                    </div>
                  )}
                </div>

                <button type="submit" id="post-btn" disabled={submitting}>
                  {submitting ? 'Posting…' : 'Post update →'}
                </button>
              </form>
            </div>

            {/* Recent posts */}
            <div>
              <div className="posts-label">Recent posts</div>
              <div id="posts-list">
                {recentPosts.length === 0 ? (
                  <div className="empty-posts">No posts yet.</div>
                ) : (
                  recentPosts.map((post) => {
                    const firstMedia = post.media?.[0];
                    const hasMultiple = (post.media?.length || 0) > 1;
                    
                    return (
                      <div key={post.id} className="post-item">
                        <div style={{ position: 'relative', flexShrink: 0 }}>
                          <div className="post-thumb-wrap">
                            {firstMedia ? (
                              firstMedia.type === 'video' ? (
                                <video className="post-thumb" src={firstMedia.url} muted></video>
                              ) : (
                                <img className="post-thumb" src={firstMedia.url} alt="" />
                              )
                            ) : (
                              <div className="post-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📝</div>
                            )}
                          </div>
                          {hasMultiple && (
                            <span className="post-extra">+{post.media.length - 1}</span>
                          )}
                        </div>
                        <div className="post-info">
                          <div className="post-title">{post.title}</div>
                          <div className="post-desc">{post.description}</div>
                          <div className="post-meta">
                            {getPostDateText(post)} · {post.postedBy || ''}
                          </div>
                        </div>
                        <button className="delete-btn" onClick={() => handleDeletePost(post.id)}>Delete</button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </main>
        </div>
      )}

      {/* Toast Notification */}
      <div id="toast" className={`${toast.type} ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  );
}
