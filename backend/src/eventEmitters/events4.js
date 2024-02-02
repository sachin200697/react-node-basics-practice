import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

const fun1 = (msg)=>{
    console.log(`Event 1 occured: ${msg}`);
};

const fun2 = (msg)=>{
    console.log(`Event 2 occured: ${msg}`);
};

const fun3 = (msg)=>{
    console.log(`Event 3 occured: ${msg}`);
};

const events = ['event1', 'event2', 'event3'];
const functions = [fun1, fun2, fun3];



function addEvents(events, functions){
    for(let i=0;i<events.length;i++){
        eventEmitter.addListener(events[i], functions[i]);
    }
}

//special events -> 1. newListener 2. removeListener 3. error
//-------------------------------------------------------
// both special events emitted automatically, to listen them we can add listeners with
// the same name of the events like below

// whenever we add any event listener then it will exucute automatically because
// on adding the event 'newListener' event will be emitted automatically
eventEmitter.on('newListener', ()=>{console.log('some new event is added');});
addEvents(events, functions);

// to catch error while event emmits
eventEmitter.on('error', (err)=>{console.log(`error occured${err}`);})
eventEmitter.emit(events[0], new Error('Logical error but programmer'))

// newListener event will be emited for removeListener as well 
eventEmitter.on('removeListener', ()=>{console.log('some event is removed');});

eventEmitter.removeAllListeners(events[0]);
eventEmitter.removeAllListeners(events[1]);
eventEmitter.removeAllListeners(events[2]);





