/*=================================
service-worker.js
=================================*/

const CACHE_NAME="bxbc-v1";

const urlsToCache=[

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

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urlsToCache);

})

);

});


/* Activate */

self.addEventListener("activate",event=>{

event.waitUntil(

caches.keys().then(cacheNames=>{

return Promise.all(

cacheNames.map(cache=>{

if(cache!==CACHE_NAME){

return caches.delete(cache);

}

})

);

})

);

});


/* Fetch */

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response||fetch(event.request);

})

);

});
