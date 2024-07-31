const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()
const nodemon = require('nodemon')
const morgan = require('morgan')
const PORT = 5000;
const app = express()
app.use(express.json())
const fileURLtoPath = require('url')
const user = require('./utility/userdata.json')
const path = require('path')

// static files wala middleware
app.use(express.static(path.resolve(__dirname, './public')))


app.get('/user', (req,res)=>{
    res.send(user)
})

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './public', "index.html"))
})

app.get('/contact', (req,res)=>{
    res.sendfile(path.resolve(__dirname, './public', 'contact.html'))
})

app.listen(PORT, ()=>{
    console.log("server is on")
})