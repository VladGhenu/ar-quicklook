const CACHE_NAME = 'safety-training-ar-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/styles/main.css',
    '/src/App.js',
    '/src/components/ScenarioList.js',
    '/src/components/ARCamera.js',
    '/src/components/AROverlay.js',
    '/src/components/ScenarioPlayer.js',
    '/src/data/scenarios.js',
    '/src/utils/arUtils.js',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});
