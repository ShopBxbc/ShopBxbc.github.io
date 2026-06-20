/*=================================
service-worker.js
=================================*/

const CACHE_NAME = "bxbc-v3";

const urlsToCache = [

"/",
"/index.html",
"/manifest.json",
"/assets/css/style.css",
"/assets/css/responsive.css",
"/assets/css/animations.css",
"/assets/js/script.js",
"/assets/js/animations.js",
"/assets/images/hero.png"

];

/* Install */

self.addEventListener("install", event => {

self.skipWaiting();

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => cache.addAll(urlsToCache))

);

});

/* Activate */

self.addEventListener("activate", event => {

event.waitUntil(

caches.keys().then(cacheNames =>

Promise.all(

cacheNames.map(cache => {

if (cache !== CACHE_NAME) {

return caches.delete(cache);

}

})

)

)

);

self.clients.claim();

});

/* Fetch - Network First */

self.addEventListener("fetch", event => {

event.respondWith(

fetch(event.request)

.then(response => {

const responseClone = response.clone();

caches.open(CACHE_NAME).then(cache => {

cache.put(event.request, responseClone);

});

return response;

})

.catch(() => caches.match(event.request))

);

});
