"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/music-react/index.html","f4c145a116226034d201a1078b9d895c"],["/music-react/static/css/main.337a3f98.css","286d9947593429031f242ffb90f452b7"],["/music-react/static/js/0.81103321.chunk.js","07d4ef8d1a3b2040e8a869365d0af3cc"],["/music-react/static/js/1.44aa0c20.chunk.js","385f7651727b15c1222fddb444c6de9e"],["/music-react/static/js/10.3ffd0979.chunk.js","07d8a8455f6db2e84eb12d9eb0b3d53d"],["/music-react/static/js/11.e3c71714.chunk.js","3e093dc5a6f0c7b7fddb7dd73110436c"],["/music-react/static/js/12.cd9be579.chunk.js","11b582ec3f5aedf17524774eae3df18c"],["/music-react/static/js/13.89fa9811.chunk.js","51d005255372fa0c895bfddbe914c811"],["/music-react/static/js/14.84a42ade.chunk.js","c62f92322a04950744f547c3f9600bca"],["/music-react/static/js/15.e0eaa12f.chunk.js","36fb9427ea46898c97e18f42a8f5e954"],["/music-react/static/js/2.5b0c3575.chunk.js","4b856f4f4c0f20257aa9ae120ec8e492"],["/music-react/static/js/3.c034647f.chunk.js","0682e4656a643e0fa2fec3810796914c"],["/music-react/static/js/4.3466df27.chunk.js","e36e3efb6722dcd8edf7bbec09bc6981"],["/music-react/static/js/5.f39a958a.chunk.js","6644ad0680c66a081cdf9e104549c4c3"],["/music-react/static/js/6.382bf92d.chunk.js","5324b54ce46a8df61160dce3e0195a99"],["/music-react/static/js/7.1dc3fd0e.chunk.js","f5e3c01da6c8a760800376a2d49cf586"],["/music-react/static/js/8.c3d8fd31.chunk.js","a21dff0dc923d7f963f99b2c4d573a7e"],["/music-react/static/js/9.602af0cb.chunk.js","b1822c16a3874d19d4aaad3797d188e7"],["/music-react/static/js/common.23674cf6.js","9c01c9c3e65a1419ebac166ce38e3a14"],["/music-react/static/js/main.971873d0.js","927931f12f4e68da3d669c7c560af93c"],["/music-react/static/media/icomoon.25f62eba.ttf","25f62ebad6ef48c164c35f7f6da42146"],["/music-react/static/media/icomoon.6617b3f8.eot","6617b3f8267d25d9a680f110d5ebad95"],["/music-react/static/media/icomoon.a1118e35.svg","a1118e35d3c9ccf4f4065dd79fe6d7a0"],["/music-react/static/media/icomoon.ca475422.woff","ca475422ce696fa889d38fb1bad6e213"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,c,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),t=urlsToCacheKeys.has(c));var s="/music-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});