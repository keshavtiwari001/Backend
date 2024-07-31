const express = require('express')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const nodemon = require('nodemon')
const colors = require('colors')
const path = require('path')
const PORT = 4000
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log("server is listening")
})