// this modules executes commands like as we execute on cmd
const cp = require('child_process');

function startChrome() {
    // to start chrome
    cp.exec('start chrome');

    // to start chrome and open given link
    cp.exec('start chrome https://www.youtube.com/watch?v=JjOvDXe8-jQ&list=PL-Jc9J83PIiHI7u_6G8j1oKyhQn_plX8i&index=6');

}

// startChrome();

// using below code we can also execute some other language code like python and
// can take the output, it means we can integrate different languages with node
const output = cp.execSync('node test.js'); //output will be in bytes
console.log(output.toString());
