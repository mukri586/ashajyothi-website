'use client';

import React, { useState, useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Track active slide index for each post card (indexed by post ID)
  const [carouselStates, setCarouselStates] = useState({});
  const cardsRef = useRef([]);

  // Set up intersection observer for dynamic news cards
  useEffect(() => {
    if (posts.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );

    const currentCards = cardsRef.current.filter(Boolean);
    currentCards.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [posts]);

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'), limit(6));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const postsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching news feed:", err);
        setError("Could not load updates.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handlePrevSlide = (postId, totalSlides) => {
    setCarouselStates(prev => {
      const current = prev[postId] || 0;
      const nextIdx = (current - 1 + totalSlides) % totalSlides;
      return { ...prev, [postId]: nextIdx };
    });
  };

  const handleNextSlide = (postId, totalSlides) => {
    setCarouselStates(prev => {
      const current = prev[postId] || 0;
      const nextIdx = (current + 1) % totalSlides;
      return { ...prev, [postId]: nextIdx };
    });
  };

  const handleDotClick = (postId, index) => {
    setCarouselStates(prev => ({
      ...prev, [postId]: index
    }));
  };

  // Helper to format date in standard Indian format (e.g. 21 May 2026)
  const formatDate = (createdAt) => {
    if (!createdAt) return '';
    // Handle Firestore timestamp
    const date = new Date(createdAt.seconds * 1000);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="cn-loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  if (error) {
    return <p className="cn-empty">{error}</p>;
  }

  if (posts.length === 0) {
    return <p className="cn-empty">No updates yet &mdash; check back soon.</p>;
  }

  return (
    <div className="cn-grid">
      {posts.map((post, idx) => {
        const mediaItems = post.media?.length 
          ? post.media 
          : post.mediaUrl 
            ? [{ url: post.mediaUrl, type: post.mediaType }] 
            : [];
            
        const activeIndex = carouselStates[post.id] || 0;
        const hasCarousel = mediaItems.length > 1;

        return (
          <article 
            className="cn-card reveal" 
            key={post.id}
            ref={el => { cardsRef.current[idx] = el; }}
          >
            {/* Media rendering */}
            {mediaItems.length > 0 && (
              hasCarousel ? (
                <div className="cn-carousel">
                  <div 
                    className="cn-track" 
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {mediaItems.map((item, idx) => (
                      <div className="cn-slide" key={idx}>
                        {item.type === 'video' ? (
                          <video src={item.url} autoPlay muted loop playsInline />
                        ) : (
                          <img src={item.url} alt={post.title} loading="lazy" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Prev/Next arrows */}
                  <button 
                    type="button"
                    className="cn-arr cn-prev" 
                    onClick={() => handlePrevSlide(post.id, mediaItems.length)}
                    aria-label="Previous slide"
                  >
                    &#8249;
                  </button>
                  <button 
                    type="button"
                    className="cn-arr cn-next" 
                    onClick={() => handleNextSlide(post.id, mediaItems.length)}
                    aria-label="Next slide"
                  >
                    &#8250;
                  </button>
                  
                  {/* Dots */}
                  <div className="cn-dots">
                    {mediaItems.map((_, idx) => (
                      <button 
                        type="button"
                        key={idx}
                        className={`cn-dot ${activeIndex === idx ? 'active' : ''}`}
                        onClick={() => handleDotClick(post.id, idx)}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="cn-media-wrap">
                  {mediaItems[0].type === 'video' ? (
                    <video src={mediaItems[0].url} autoPlay muted loop playsInline />
                  ) : (
                    <img src={mediaItems[0].url} alt={post.title} loading="lazy" />
                  )}
                </div>
              )
            )}

            {/* Post body */}
            <div className="cn-body">
              {post.createdAt && (
                <time className="cn-date">{formatDate(post.createdAt)}</time>
              )}
              <h3 className="cn-title">{post.title}</h3>
              <p className="cn-desc">{post.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
