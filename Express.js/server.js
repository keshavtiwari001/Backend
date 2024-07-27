// const express = require ('express')
// const colors = require('colors')
// const dotenv = require('dotenv').config()
// const  app = express()

// app.get('/', (req,res)=>{
//     res.send('Hello, octopus Prime!')
// })
// app.listen(5000,()=>{
//     console.log('app is listing ')
// })

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const nodemon = require('nodemon');
const PORT = 5000;
const app = express()
// properties of express has been transfered into app

app.use(express.json())
//  here 'use' is a middleware -> actully it's predefiened middleware.

app.get('/',(req,res)=>{
    res.send('Hello from octopus Prime !!')
})

app.listen(5000,()=>{
    console.log('Octopus prime is listing!!')
})