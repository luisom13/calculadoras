// Incrementa esta versión cada vez que hagas cambios en el HTML.
// El navegador detectará el cambio y actualizará el caché automáticamente.
const CACHE_VERSION = 'v2';
const CACHE_NAME = `calculasv-${CACHE_VERSION}`;

// Archivos locales + CDN de Chart.js necesarios para funcionar offline.
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// ── INSTALL ──────────────────────────────────────────────────────────────────
// Se ejecuta una sola vez cuando el SW se instala por primera vez (o tras
// un cambio de versión). Descarga y guarda todos los assets en caché.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Fuerza que el nuevo SW tome el control inmediatamente sin esperar
  // a que el usuario cierre todas las pestañas abiertas.
  self.skipWaiting();
});

// ── ACTIVATE ─────────────────────────────────────────────────────────────────
// Se ejecuta después del install. Aquí limpiamos cachés viejos de versiones
// anteriores para no acumular basura en el almacenamiento del dispositivo.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('calculasv-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  // Toma el control de todas las pestañas abiertas inmediatamente.
  self.clients.claim();
});

// ── FETCH (estrategia Cache-First) ───────────────────────────────────────────
// Cada vez que la app pide un recurso:
//   1. Busca en el caché primero → respuesta instantánea offline.
//   2. Si no está en caché, lo busca en la red → útil para recursos nuevos.
self.addEventListener('fetch', (event) => {
  // Solo interceptamos peticiones GET (no POST, etc.)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Tenemos la respuesta en caché: la devolvemos al instante.
        // En paralelo, intentamos actualizar el caché en background
        // para que la próxima visita tenga la versión más reciente.
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => { /* Sin red, ignoramos silenciosamente */ });

        // No esperamos la red: devolvemos el caché ya.
        return cachedResponse;
      }

      // No está en caché: vamos a la red.
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          // Guardamos en caché para la próxima vez.
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          // Sin red y sin caché: devolvemos el index.html como fallback
          // para que la app al menos muestre algo.
          return caches.match('./index.html');
        });
    })
  );
});
