const { response } = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const http = require('http');

const port = process.env.PORT || 3000 ;

const server = http.createServer((req, rep) => {
    
    res.statusCode = 200;
    res.setHader('Content-type', 'text/html');
    console.log(req.url);

    if(req.url="./"){
        res.render('<h1> thsis is  code with harry </h1> <p> this is a rock way to world</p>');
    };
    else if (req.url="./about"){}
        res.render("<h1>about</h1><p>i am harry friend</p>")

server.listen(port, () => {
    console.log(`server is lising on port ${port}`);
});