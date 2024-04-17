const app = {
    SW: null,
    init: function() {
        if('serviceWorker' in navigator) {
            // register a worker
            navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            }).then(registration=>{
                app.SW = registration.installing || registration.waiting || registration.active;

                console.log('registration completed');
            })
        }
    }
}

