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

// when we add events it will be added at the last of the existing event listeners array
// initially this event listeners array is empty
// we can add same events multiple times and when we emit this event then it will 
// execute same number of times that we added
addEvents(events, functions);   
addEvents(events, functions);
addEvents(events, functions);

eventEmitter.emit(events[0], 'event1');
eventEmitter.emit(events[1], 'event2');
eventEmitter.emit(events[2], 'event3');
