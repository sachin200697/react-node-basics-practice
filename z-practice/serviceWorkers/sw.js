console.log('sw');

//self refers to the current service worker created
// self is similar like window object but it does not has access to dom
let serviceWorker = self;   
console.log(serviceWorker);

serviceWorker.addEventListener('install', (ev)=>{
    // service worker is installed
    // we can cache some new files here
    console.log('installed');
});

serviceWorker.addEventListener('activate', (ev)=>{
    // service worker is activated
    // we can get rid of old cache files 
    console.log('activated');
});

serviceWorker.addEventListener('fetch', (ev)=>{
    // service worker intercepted a fetch api
    // we can see request for css and js file that included in the html page
    // can make dicision that we want to use files from cache or want to send the request 
    // to netword
    // can save/retrieve something in indexDB
    console.log('intercepted a http request', ev.request);
});

serviceWorker.addEventListener('message', (ev)=>{
    // message from webpage
    console.log('installed');
});
