const http = require('http');
const loader= require('lodash');
const file=require('fs');

const hostname='127.0.0.1';
const port=3000;

const server= http.createServer(function(req,res){

    file.readFile('test.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/html');
    // res.end("<h1>Hi welcome to the first Program of my Node</h1>")
})

server.listen(port,hostname,function(){
    console.log("Server started at http://"+hostname+":"+port+"/");
})