let cacheData="appV1";
this.addEventListener("install",(event)=>{
   
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
             cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/players',
                '/about'
             ])
        })
    )
})


this.addEventListener("fetch",(event)=>{
    event.waitUntil(
        this.ServiceWorkerRegistration.showNotification("hello",{
            body:"hello pozdrav",
        })
    );
   

    if(!navigator.onLine){
       
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp;
            }
        })
    );
    }
})