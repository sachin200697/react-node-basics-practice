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

// execute only one
eventEmitter.once('newListener', ()=>{console.log('some new event is added');});
addEvents(events, functions);

// newListener event will be emited for removeListener as well 
// removeListener will execute only once
eventEmitter.once('removeListener', ()=>{console.log('some event is removed');});

eventEmitter.removeAllListeners(events[0]);
eventEmitter.removeAllListeners(events[1]);
eventEmitter.removeAllListeners(events[2]);





