var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.writeFile("demo1.txt", "data within file ", function(err){
        if(err){
            console.log("err");
        }else{
            res.write("file written");
        }
    });
    res.write("Hi welcome<br>");
        res.end("end of body");
}).listen(3000,'localhost');
console.log("server started");