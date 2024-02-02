import { parentPort } from "worker_threads";

let max = 20_000_000_000;
let count = 0;
for (let i = 0; i < max; i++) {
  count++;
}
parentPort.postMessage(count);




