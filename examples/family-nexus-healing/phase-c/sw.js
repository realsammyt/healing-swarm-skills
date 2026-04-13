/**
 * Service Worker — Family Nexus Healing PWA
 *
 * Cache-first strategy. After the first load, the entire app works offline.
 * Zero network calls once cached.
 */

const CACHE_NAME = 'family-nexus-v2';

/**
 * Core files that must be cached for the app to work offline.
 * These are pre-cached on install.
 */
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
// Install — pre-cache core assets
// ---------------------------------------------------------------------------

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => {
      // Activate immediately, don't wait for existing tabs to close
      return self.skipWaiting();
    })
  );
});

// ---------------------------------------------------------------------------
// Activate — clean up old caches
// ---------------------------------------------------------------------------

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      // Take control of all open clients immediately
      return self.clients.claim();
    })
  );
});

// ---------------------------------------------------------------------------
// Fetch — cache-first, fall back to network
// ---------------------------------------------------------------------------

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      // Not in cache — try network, then cache the response for future use
      return fetch(event.request).then((networkResponse) => {
        // Only cache successful responses from our own origin
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed and not in cache — return a fallback for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // For other resources, just fail
        return new Response('', {
          status: 408,
          statusText: 'Offline — resource not cached'
        });
      });
    })
  );
});
