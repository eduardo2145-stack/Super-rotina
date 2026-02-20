const CACHE_NAME = 'amigo-virtual-dash-v1';
const urlsToCache = [
  './dash.html',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://cdn-icons-png.flaticon.com/512/4712/4712010.png'
];

// Instala o cache do painel infantil
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepta as requisições para rodar mais rápido
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
