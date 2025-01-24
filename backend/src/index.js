import express from 'express'
import  DbConnect  from '../src/db/connect.db.js'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import  SignUpRoute  from './routes/user.route.js'
import  SignInRoute  from './routes/user.route.js'
import  JobsPost  from './routes/user.route.js'

dotenv.config({ 
    path:'.env'
})

const app = express();
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',SignUpRoute)
app.use('/',SignInRoute)
app.use('/',JobsPost)

DbConnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,() =>{ 
        console.log(`Server is started at the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Error ${err}`)
})