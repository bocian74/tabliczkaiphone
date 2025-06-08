const CACHE_NAME = "tabliczka-v1";
const FILES_TO_CACHE = [
  "index.html",
  "correct.mp3",
  "wrong.mp3",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});