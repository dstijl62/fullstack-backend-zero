
/*const http = require('http');


// const hostname = '127.0.0.1'; //=local host
const hostname = 'localhost'; //=local host
const port = 8001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n Hoi dan IT tu hoc CC aa bb cc');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/

const express = require('express')//common.js
const path = require('path');
require('dotenv').config();
// import express from 'express';//es modules

console.log(">>> check env: ", process.env);

const app = express(); //app express
const port =  process.env.PORT || 8888; // khai bao port => hardcode . uat . prod
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('Check abc!')
})

app.get('/html', (req, res) => {
  // res.send('<h1>Hello World! Test html</h1>')
  res.render('sample.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
