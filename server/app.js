const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express()
const port = 3000

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
  console.log("connection successful");
}).catch((e)=>{
    console.log(e,'connection failed');
})

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('Hello about');
})

app.get('/contact', (req, res) => {
    res.send('Hello contact');
})

app.get('/signin', (req, res) => {
    res.send('signin');
})

app.get('/signup', (req, res) => {
    res.send('signup');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})