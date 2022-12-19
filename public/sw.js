let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                'index.html',
                '/users',
                '/'
            ])
        })
    )
})


this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            if(resp){
                console.log("resp", resp)
                return resp;
            }
        })
    )
})