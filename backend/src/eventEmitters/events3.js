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

addEvents(events, functions);
addEvents(events, functions);
addEvents(events, functions);

// when we remove the events then it will remove from the last of the list
eventEmitter.removeListener(events[0], functions[0]);  // can also use off to remove the event from listener
// eventEmitter.off(events[0], functions[0]);  // can also use off to remove the event from listener

eventEmitter.emit(events[0], 'This is event 1');

// to remove all events we can use 
eventEmitter.removeAllListeners(events[0]);

eventEmitter.emit(events[0], 'This is event 1.1');
eventEmitter.emit(events[1], 'This is event 2.1');
eventEmitter.emit(events[2], 'This is event 3.1');


// to remove all events we can use 
eventEmitter.removeAllListeners(events[1]);
eventEmitter.removeAllListeners(events[2]);

eventEmitter.emit(events[0], 'This is event 1.2');
eventEmitter.emit(events[1], 'This is event 2.2');
eventEmitter.emit(events[2], 'This is event 3.2');