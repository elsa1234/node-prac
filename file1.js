var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res){
    console.log(`${req.method} request for ${req.url}`);
    if(req.url==="/"){
        fs.readFile("./SPA project_day-2","UTF-8", function(err, html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        })
    }else{
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("404 file not found");
    }
}).listen(3000, 'localhost');