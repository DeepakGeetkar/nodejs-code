const { response } = require('express');
const res = require('express/lib/response');
const http = require('http');

const port = process.env.PORT || 3000 ;

const server = http.createServer((req, rep) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHader('Content-type', 'text/html');
    res.render('<h1> thsis is  code with harry </h1> <p> this is a rock way to world</p>');
} )   ;

server.listen(port, () => {
    console.log(`server is lising on port ${port}`);
});