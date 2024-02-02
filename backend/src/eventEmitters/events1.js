import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

// first example 
function firstExample() {
    // both on and addListener are same that registers and event to a callback function
    eventEmitter.on('on-example', (msg)=>console.log(`This is event on-example ${msg}`));
    eventEmitter.addListener('addListener-example', (msg)=>console.log(`This is event addListener-example ${msg}`));

    eventEmitter.emit('on-example', 'on-exmaple 1');
    eventEmitter.emit('addListener-example', 'addListener 1');
}

firstExample();