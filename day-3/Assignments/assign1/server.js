const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const nodemon = require('nodemon')
const morgan = require('morgan')
const path = require('path')
const PORT = 4000
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>now just type ==>> btn (after / )</h1>')
})

app.get('/btn',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT,()=>{
    console.log("ONN")
})