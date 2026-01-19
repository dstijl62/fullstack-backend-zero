
const http = require('http');


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