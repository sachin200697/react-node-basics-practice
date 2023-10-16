import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './person.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.json());
app.use('/app', router);
app.get('/', (req, res)=>{
    console.log('hello');
    res.status(201).send({name: 'Hello'});
});

app.post('/', (req, res)=>{
    let person = {
        name: 'sahcin',
        age: 24
    }
    console.log(JSON.stringify(person));
    
    res.status(200).send(req.body);    
})

app.patch('/', (req, res)=>{
    res.send('Patched');
});

app.delete('/', (req, res)=>{
    res.send('Deleted');
})


app.put('/', (req, res)=>{
    res.send('Put');
});






app.post('/validation', (req, res)=>{
    // res.send(path.resolve(__dirname, 'index.html'));
    // console.log(req);
    console.log(req.headers.cookie);
    console.log('-------------------------------------------------');
    res.sendFile(path.resolve(__dirname, 'index.html'));
    // res.redirect(200, "http://localhost:7000/getFileSecond/");
})

app.post('/noValidation', (req, res)=>{
    // res.send(path.resolve(__dirname, 'index.html'));
    console.log(req.body);
    console.log(req.headers.cookie);
    res.sendFile(path.resolve(__dirname, 'index.html'));
    // res.redirect(200, "http://localhost:7000/getFileSecond/");
})

app.get('/getFileSecond', (req, res)=>{
    // res.send(path.resolve(__dirname, 'index.html'));
    console.log(req.headers);
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 7000, ()=>{
    console.log('running');
});