import http from 'http';
import express from 'express';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.resolve('./public')));

/// socket related code
io.on('connection', (socket)=>{
    console.log("A new user has connected", socket.id);

    // to listen to client
    socket.on('sk-message', (message)=>{
        console.log('This is user message from client', message);

        // send message to all client
        io.emit('broadcast', message);
    })
});

// express related code (for communication)
app.get('/chat', (req, res)=>{    
    console.log(path.resolve('./public'));
    res.sendFile(path.resolve('./public/index.html'));
});

server.listen(9000, ()=>{
    console.log('listening on port 9000');
})