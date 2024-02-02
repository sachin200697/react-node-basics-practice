import express from "express";
import {Worker} from 'worker_threads';

const multiThradingRouter = express.Router();

multiThradingRouter.get('/non-blocking', (req, res)=>{
    res.send('This is non blocking');
});

/*
Steps to produce the issue for multithreading: 

1. call /blocking/ api
2. call /non-blocking/ api --> it will block the server
3. call /blockinig/ api again  --> as 2 step call is block so this call will also be blocked

// after above steps competed processing then
4. call /blocking-with-worker-threads/ (it is like /blocking/)
5. call /non-blocking/ api --> now it will not be blocked even step 4 request is blocked

*/

multiThradingRouter.get('/blocking', async (req, res)=>{
    let max = 20_000_000_000;
    let count = 0;
    for(let i=0;i<max;i++){
        count++;
    }

    res.send('Result of blocking is: '+count);
});

multiThradingRouter.get('/blocking-with-worker-threads', async (req, res)=>{

    //somehow path is being searched from backend folder, so need to use
    // ./src/multi-threading/worker.js
    const worker = new Worker('./src/multi-threading/worker.js');
    worker.on('message', (data)=>{
        res.send('Result of blocking is: '+data);
    });

    worker.on('error', (err)=>{
        res.status(404).send('An error occured: '+err);
    })
});

export default multiThradingRouter;