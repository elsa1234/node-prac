var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.writeFile("demo.txt", "\nappend file", function(err){
        if(err){
            console.log("err");
        }else{
            console.log("file written");
        }
    });
    fs.readFile("demo.txt",function(err, data){
        console.log(data.toString());
    });
    res.write("Hi welcome<br>");
    res.end("end of body");
}).listen(3000,'localhost');
console.log("server started");