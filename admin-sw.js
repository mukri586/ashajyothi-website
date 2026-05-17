// Minimal service worker — enables PWA "Add to Home Screen" on iOS & Android
const CACHE   = 'aj-admin-v1';
const OFFLINE = ['/admin.html', '/admin-manifest.json', '/logo-mark.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(OFFLINE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Never intercept Firebase, Google APIs, or font requests
  if (
    url.includes('firebasejs') ||
    url.includes('googleapis') ||
    url.includes('firebaseapp') ||
    url.includes('gstatic')
  ) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
