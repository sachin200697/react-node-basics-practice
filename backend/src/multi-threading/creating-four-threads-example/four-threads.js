import { rejects } from "assert";
import { hasSubscribers } from "diagnostics_channel";
import express from "express";
import { resolve } from "path";
import {Worker} from 'worker_threads';

const fourThradingRouter = express.Router();

fourThradingRouter.get('/non-blocking', (req, res)=>{
    res.send('This is non blocking');
});

const THREAD_COUNT = 4;

const createWorkers = ()=>{
    return new Promise((resolve, rejects)=>{
        const worker = new Worker('./src/multi-threading/creating-four-threads-example/four-workers.js', {
            workerData: {thread_count: THREAD_COUNT}
        });
        worker.on('message', data=>{
            resolve(data);
        });
        worker.on('error', err=>{
            rejects(err);
        })
    });
}

fourThradingRouter.get('/blocking-with-four-worker-threads', async (req, res)=>{   
    
    // to test this api, how much it will take to response, we can use below command
    // time curl --get http://localhost:7000/multi-threading/blocking-with-four-worker-threads
    // using above command, we can compare the difference b/w the times taken but
    // two different apis

    const promiseArray = [];

    for(let i=0;i<THREAD_COUNT;i++){
        promiseArray.push(createWorkers());        
    }    
    const threadResults = await Promise.all(promiseArray);    
        
    const total = threadResults[0] + threadResults[1] + threadResults[2] + threadResults[3];

    console.log(threadResults);
    res.send('res is: ' + total);
});

export default fourThradingRouter;

/*
dependency injection
event emmiters
difference b/w event emmiters and publisher-hasSubscribers pettorn
web sockets 
streaming
graphql
*/