const express = require('express')
// const dotenv = require('notenv').config()
const morgan = require('morgan')
const colors = require('colors')
const http = require('http')
const path = require('path')
const PORT = 4000

const app = express()

app.use(express.static(path.join(__dirname, "/signup")))

app.listen(PORT, ()=>{
    console.log('ONN')
})