'use strict';

/**
 * @description cacheVersion
 * This is not fiction. When you have your own already
 * production running and you need to update frontend
 * code. You will need only to change this number
 * for example `2`.
 * @param cacheVersion
 */
var cacheVersion = 1;

var cacheName = 'static-files-v1';
var currentCache = {
  offline: 'offline-cache' + cacheVersion,
};
const offlineUrl = 'offline.html';

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        offlineUrl,
        'Brm-HTML5-Shipping.css',
        'Brm-HTML5-Shipping.data',
        'Brm-HTML5-Shipping.data.js',
        'Brm-HTML5-Shipping.html',
        'Brm-HTML5-Shipping.js',
        'Brm-HTML5-Shipping.UE4.js',
        'Brm-HTML5-Shipping.wasm',
        'Utility.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method === 'POST') {
    return;
  }
  event.respondWith(
    caches.open('dynamic-content-v1').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            if (response.status == 206) {
              // statusText: "Partial Content"
              return response;
            } else {
              cache.put(event.request, response.clone());
            }
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            if (response.status == 206) {
              // statusText: "Partial Content"
              return response;
            } else {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        })
      );
    })
  );
});

const fireAddToHomeScreenImpression = (event) => {
  fireTracking('Add to homescreen shown');

  // will not work for chrome, untill fixed
  event.userChoice.then((choiceResult) => {
    fireTracking(`User clicked ${choiceResult}`);
  });

  // This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
  self.removeEventListener('beforeinstallprompt', fireAddToHomeScreenImpression);
};
self.addEventListener('beforeinstallprompt', fireAddToHomeScreenImpression);

// Track web app install by user
self.addEventListener('appinstalled', (event) => {
  fireTracking('PWA app installed by user!!! Hurray');
});

//Track from where your web app has been opened/browsed
self.addEventListener('load', () => {
  let trackText;
  if (navigator && navigator.standalone) {
    trackText = 'Launched: Installed (iOS)';
  } else if (matchMedia('(display-mode: standalone)').matches) {
    trackText = 'Launched: Installed';
  } else {
    trackText = 'Launched: Browser Tab';
  }
  fireTracking(track);
});
