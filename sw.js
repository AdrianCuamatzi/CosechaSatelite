const C='milpa-v1',S=['./','./index.html','./manifest.webmanifest','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(S)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(S.some(u=>e.request.url.endsWith(u.replace('./','')))||e.request.mode==='navigate'){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))}});
