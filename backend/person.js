import express from "express";

const app = express();

const router = express.Router();

let Persons = [{id: '0', name:'default person'}];

router.get('/person', (req, res)=>{
    res.send(Persons);
});

router.post('/person', (req, res)=>{
    const name = req.body.name;
    const id = Math.floor(Math.random()*100);

    Persons.push({id, name});
    res.send({id, name});
});

router.get('/person/:id', (req, res)=>{    
    res.send(Persons.find(person=>person.id===req.params.id));
});

router.delete('/person/:id', (req, res)=>{
    console.log(Persons);
    Persons = Persons.filter(person=>person.id!==Number(req.params.id));
    console.log(Persons);
    res.send('Deleted')
});

export default router;