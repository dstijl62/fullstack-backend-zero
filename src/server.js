
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

require('dotenv').config();
const express = require('express')//common.js
// const path = require('path');

const configViewEngine = require('./config/viewengine');

const webRoutes = require('./routes/web');

const connection = require('./config/database');

// import express from 'express';//es modules

console.log(">>> check env: ", process.env);

const app = express(); //app express
const port =  process.env.PORT || 8888; // khai bao port => hardcode . uat . prod
const hostname = process.env.HOST_NAME;


//config req.body
 app.use(express.json()) // for json
   app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//config static file: image/css/js


//Khai báo route
app.use('/', webRoutes);
// app.use('/v1', webRoutes);

//test connection

// A simple SELECT query
connection.query (
    'select * from Users u',
    function (err, results, fields) {
     console.log(">>>results=", results); // results contains rows returned by server
     //console.log(">>>fields=", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
