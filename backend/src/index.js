import express from 'express'
import  DbConnect  from '../src/db/connect.db.js'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import WebSocket,{WebSocketServer} from 'ws';

import  SignUpRoute  from './routes/user.route.js'
import  SignInRoute  from './routes/user.route.js'
import  JobsPost  from './routes/user.route.js'
import  postNetwork   from './routes/user.route.js';
import getNetwork from './routes/user.route.js';
import  postTalent  from './routes/user.route.js';
import  getTalent  from './routes/user.route.js';
import { SignOut } from './controllers/user.control.js';
import { connect } from './controllers/connection.control.js';


dotenv.config({ 
    path:'.env'
})

const app = express();
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',SignUpRoute)
app.use('/',SignInRoute)
app.use('/',SignOut)
app.use('/',JobsPost)
app.use('/',postNetwork)
app.use('/',getNetwork)
app.use('/',postTalent)
app.use('/',getTalent)
app.use('/',connect)


//websocket server 
const wss  =  new WebSocketServer({
    port:8080
})

wss.on('connection',(ws)=>{
    console.log('New Connection')
    ws.on('message',(msg, isbinary)=>{
        console.log(msg)
        wss.clients.forEach(client =>{
            if(client.readyState === WebSocket.OPEN){
                client.send(msg,{binary:isbinary})
            }
        })
    })
    
    wss.on('close',()=>{
        console.log('Connection closed')
    })
})
DbConnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,() =>{ 
        console.log(`Server is started at the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Error ${err}`)
})