const dotenv = require('dotenv');
const express = require('express');
const app = express()

dotenv.config({path:'./config.env'})

require('./db/conn');
app.use(express.json());

// 

const port = process.env.PORT;

app.use(require('./router/auth'));

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