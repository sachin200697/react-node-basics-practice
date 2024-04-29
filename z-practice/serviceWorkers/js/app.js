const app = {
    SW: null,
    init: function() {
        if('serviceWorker' in navigator) {
            // 1. register a worker
            navigator.serviceWorker.register('./sw.js', {
                //this scope is defined for root folder where html file is present 
                scope: '/z-practice/serviceWorkers/'    
            }).then(registration=>{
                app.SW = registration.installing || registration.waiting || registration.active;

                console.log('registration completed');
            })

            // 2. See if the page is currently has a service worked 
            if(navigator.serviceWorker.controller){
                console.log('Page has a service worker');
            }
            // 3. Register a handler to detect when a new or updated service worker is 
            // installed or activete
            navigator.serviceWorker.oncontrollerchange = (ev)=>{
                console.log('new service worker activated');
            }

            // 4. Remove unregistred service workers
            // thre are 4 ways to delete old, so that new can be registered
            // 1. use skipForWaiting option for new sw
            // 2. check update on reload option (path -> application -> service workers -> update on reload)
            // 3. close all tabs and then open new 
            // 4. using unregister method like below (we don't use 4th method ofter)
            // navigator.serviceWorker.getRegistrations().then(regs=>{
            //     for(let reg of regs){
            //         reg.unregister().then(isUnRegistered=>{
            //             console.log('Unregistration completed: '+ isUnRegistered);
            //         })
            //     }
            // })

            // 5. Lister for messages from SW
        } else {
            console.log('Service workers are not supported');
        }
        
    }
}

app.init();