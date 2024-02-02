import { error } from 'console';
import express from 'express';
import status from 'express-status-monitor';    //to monitor memory and cpu usage
import fs from 'fs';
import zlip from 'zlib';

const app = express();

// we can use localhost:9000/status -> to see the current memory and cpu usage
app.use(status());

//here is problem because we are storing data of file in RAM and then sending it
app.get('/', (req, res)=>{
    fs.readFile('./data.txt', (err, data)=>{
        let strData = data.toString();
        res.json({data: strData});
    })
})

//efficient way
app.get('/data', (req, res)=>{
    const stream = fs.createReadStream('./data.txt', 'utf-8');

    // data is coming as part of chunk
    stream.on('data', chunk=>{
        res.write(chunk);
    });

    stream.on('end', ()=>{
        res.end();
    });

    stream.on('error', ()=>{
        console.log(error);
    });
});

//to create zip file
// using pipe method we can pass output of one file to another file
// take data from one file and give it to another file, it is called chaining and we 
// we do it using pipe method
fs.createReadStream('./data.txt').pipe(zlip.createGzip().pipe(fs.createWriteStream('./data.zip')));

let writeStream = fs.createWriteStream('./exmaple.txt');
let data = 'Hi, My name is sk';
writeStream.write(data, 'utf-8');
writeStream.end();

app.listen(9000, ()=>{
    console.log('Listening on port 9000');
})

/*
We have 4 types of stream in nodejs

1. Readable -> Read data from source
2. Writable -> Write data to destination
3. Duplex -> Read and write both
4. Transform -> Manipulate data

*/