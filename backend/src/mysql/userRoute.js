import express from 'express';
import {Mysql} from './mysql.js';

const userRouter = express.Router();
const con = new Mysql();
con.connect();

userRouter.get('/user', (req, res)=>{
    con.execute('select * from user', (data)=>{
        res.status(200).send(data);
    })
});

userRouter.post('/user', (req, res)=>{
    const userData = {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile
    }
    con.execute('insert into user set ?', (data)=>{
        res.status(200).send(data);
    }, userData);
});

userRouter.put('/user/:id', (req, res)=>{
    const id = req.params.id;
    const {name, address, mobile} = req.body;
    const data = {
        name, address, mobile
    }
    con.execute('update user set ? where id = ?', (data)=>{
        res.status(200).send(data);
    }, [data, id]);
});

userRouter.patch('/user/:id', (req, res)=>{
    const id = req.params.id
    const {name, address, mobile} = req.body;
    const data = {       
    };
    if(name) data.name = name;
    if(address) data.address = address;
    if(mobile) data.mobile;
    con.execute('update user set ? where id = ?', (data)=>{
        res.status(200).send(data);
    }, [data, id]);
});

userRouter.delete('/user/:id', (req, res)=>{
    const id = req.params.id;
    con.execute('delete from user where id = ?', (data)=>{
        res.status(200).send(data);
    }, id);
});

// con.disconnect();
export {userRouter};