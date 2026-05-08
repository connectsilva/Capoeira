const CACHE_NAME = 'capoeira-v1';
const ASSETS = [
  '/',
  'index.html',
  'manifest.json',
  'icon-192.png' // Adicione aqui seus ícones e outros arquivos locais
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
