const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const nodemon = require('nodemon')
const morgan = require('morgan')
const path = require('path')
const PORT = 4000
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Here is a stopWatch => just type ==>> stop (after / )</h1>')
})

app.use(express.static(path.resolve(__dirname, 'stop_watch')))
app.get('/stop',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'stop_watch', 'index.html'))
})

app.listen(PORT,()=>{
    console.log("ONN")
})