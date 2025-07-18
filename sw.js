self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gav-estoque').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './favicon.ico'
      ])
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});