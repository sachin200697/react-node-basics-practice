import { parentPort, workerData } from "worker_threads";

let max = 20_000_000_000;
let count = 0;

console.log('number_of_thread: '+workerData.thread_count);

for (let i = 0; i < max/workerData.thread_count; i++) {
  count++;
}
parentPort.postMessage(count);




