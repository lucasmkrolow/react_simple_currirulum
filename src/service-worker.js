import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

var CACHE_NAME = "sw-test-v1";
var urlsToCache = ["/"];

self.addEventListener("install", function (event) {
  //perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("service worker is activated");
});
