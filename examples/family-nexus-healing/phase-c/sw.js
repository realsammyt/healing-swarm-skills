/**
 * Service Worker — Family Nexus Healing PWA
 *
 * Network-first with cache fallback for ALL resources.
 * This ensures deploys propagate immediately while still working offline.
 */

const CACHE_NAME = 'family-nexus-v4';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/base.css',
  './css/modes.css',
  './css/a11y.css',
  './css/components.css',
  './js/app.js',
  './js/router.js',
  './js/render.js',
  './js/storage.js',
  './js/today.js',
  './js/felt.js',
  './js/modes/family-mode.js',
  './js/modes/father-mode.js',
  './js/modes/mother-mode.js',
  './data/protocols.json'
];

// ---------------------------------------------------------------------------
// Install — pre-cache core assets, activate immediately
// ---------------------------------------------------------------------------

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ---------------------------------------------------------------------------
// Activate — clean up old caches, take control immediately
// ---------------------------------------------------------------------------

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ---------------------------------------------------------------------------
// Fetch — network-first, fall back to cache
//
// Why network-first instead of cache-first:
// - Deploys propagate IMMEDIATELY (no more unregistering service workers)
// - Offline still works perfectly (cache is the fallback)
// - Slightly slower on repeat visits when online (network round-trip)
//   but this app is small enough that the difference is imperceptible
// ---------------------------------------------------------------------------

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Got a fresh response — cache it for offline use
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed — serve from cache (offline mode)
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Last resort for navigation: serve cached index.html
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 408, statusText: 'Offline' });
        });
      })
  );
});
