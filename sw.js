const CACHE_NAME = 'geoquiz-cache-v3';
const urlsToCache = [
  './', './index.html', './app.css', './app.js', './data.js',
  './manifest.json', './icons/icon-192.png', './icons/icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://d3js.org/d3.v7.min.js',
  'https://unpkg.com/topojson-client@3',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => {
    if (r) return r;
    return fetch(e.request).then(res => {
      if (!res || res.status !== 200 || res.type !== 'basic') return res;
      const clone = res.clone();
      caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      return res;
    });
  }));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))));
});
