const express =  require('express')
const nodemon = require('nodemon')
const dotenv = require('dotenv').config()
const colors = require('colors')
const morgan = require('morgan')
const path = require('path') 
const connectDb = require('./config/db')
const app = express()

const PORT = process.env.PORT ;
connectDb();

app.get('/',(req,res)=>{
    res.send('Radhe Radhe')
})

app.listen(PORT,()=>{
    console.log("ONN")
})