  console.log('service worker FILE listening')

  var CACHE_NAME = 'plantio-cache-v1';
  var urlsToCache = [
    '/',
    'plant.html'
  ];

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
  });

  // Notification event handler
  self.addEventListener('notificationclick', function(event) {
    let url = 'https://plantio.co.uk/plant.html';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
      clients.matchAll({
        includeUncontrolled: true,
        type: 'window'
      }).then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
    );
  });