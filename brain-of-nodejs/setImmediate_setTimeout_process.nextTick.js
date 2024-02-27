//setImmediate -> it goes to check handlers or check queue

//setTimeout -> it goes to timer queue

//process.nextTick -> This executes in the starting of the event loops comes

//all above methods register a callback but have 
// different priority to get executed by eventloop
// process.nextTick > setImmediate > setTimeout

console.log('Starting');
const add = (a,b)=>(a+b);


setTimeout(()=>{
    console.log('SetTimeout');
    console.log(`This is setTimeout : ${add(5, 5)}`);
},1000);

setImmediate(()=>{
    console.log('SetImmediate');
    console.log(`This is setImmediate : ${add(10, 20)}`);
}, 1000);

process.nextTick(()=>{
    console.log(`This is process.nextTick : ${add(1,1)}`);
})

