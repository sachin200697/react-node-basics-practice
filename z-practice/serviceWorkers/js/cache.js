// cache mechanism is separate from service workers and 
// both can funciton without each other 
// but we can also integrate them

// methods
let obj = {
    cacheName: 'assetImages',
    init() {
        obj.openCache();
        document.querySelector('.delete-cache').addEventListener('click', obj.deleteCache);
    },
    openCache() {
        caches.open(obj.cacheName).then((cache)=>{
            console.log(`cache ${obj.cacheName} is opened`);

            // we can store data in cache with key value pairs
            // where key = request object and value = response 
            // for key we can use simple string, url or request object but at the last
            // it will be converted into request object
            let urlString = './img/img1.PNG?id=one';
            cache.add(urlString);   //add => fetch + put 
            // after adding the image we can see it -> inspect -> application -> Cache storage -> 
            
            // we can also use url object as a key to chche files
            // but now we also need to put the protocol, host, port and path 
            let url = new URL('http://127.0.0.1:5500/z-practice/serviceWorkers/img/img1.PNG?id=two');
            cache.add(url);

            // we can also use Request object as key 
            // we can store a single file multiple times using the diff key
            let request = new Request('./img/img1.PNG?id=three');
            cache.add(request);

            //check keys of cache
            cache.keys().then(keys=>{
                keys.forEach((key, index)=>{
                    console.log(index, key);
                })
            })
            return cache;
        }).then((cache)=>{
            caches.has(obj.cacheName).then((hasCache)=>{
                console.log(`is cache present for ${obj.cacheName}? ${hasCache}`);
            })

            //search for files in cache
            // cache.match => for single match, 
            // cache.matchAll => will look into current cache and give everyting, 
            // caches.match => will look into all caches
            let urlString = './img/img2.PNG?id=one';
            // returning it to use another .then block
            return caches.match(urlString).then(cacheResponse=>{
                // cacheResponse is same data that we would have receive if we do fetch for urlString
                if(cacheResponse && cacheResponse.status < 400 && 
                    cacheResponse.headers.has('content-type') && 
                    cacheResponse.headers.get('content-type').match(/^image\//i)){
                        console.log('found in cache', cacheResponse);
                        return cacheResponse;
                    } else {
                        //if cache not present
                        return fetch(urlString).then(fetchResponse=>{
                            if(!fetchResponse.ok) throw fetchResponse.status;
                            // with the fetchResponse object, we can either store it inside cache 
                            // or can send to browser to use but we can not do both
                            // so to do both things we have to clone it
                            cache.put(urlString, fetchResponse.clone());
                            return fetchResponse;
                        });
                    }
                    
            })
        }).then(response=>{
            console.log(response);
            document.querySelector('output').textContent = response.url;
            return response.blob();
        }).then(blob=>{
            const url = URL.createObjectURL(blob);
            let img = document.createElement('img');
            img.src = url;
            document.querySelector('output').append(img);
        });
    },
    deleteCache(){
        caches.open(obj.cacheName).then(cache=>{
            let urlString = './img/img2.PNG?id=one';
            cache.delete(urlString).then(isDeleted=>{
                console.log('is cache deleted? '+isDeleted);
            })
        })

        // to delete entire caches
        caches.delete(obj.cacheName).then(isEntireCacheDeleted=>{
            console.log('is Entire cache deleted? '+isEntireCacheDeleted);
        })
    }
}

document.addEventListener('DOMContentLoaded', ()=>obj.init());