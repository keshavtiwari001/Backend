const express = require('express')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const nodemon = require('nodemon')
const colors = require('colors')
const path = require('path')
const exp = require('constants')
const PORT = 4000
const app = express()

app.get('/',(req,res)=>{
    res.send("<h4>Type in URL after /</h4> <h1>calculator</h1>")
})

app.use(express.static(path.join(__dirname,"calculator")))
app.get('/calculator',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'calculator', 'index.html'))
})

app.listen(PORT,()=>{
    console.log("server is listening")
})