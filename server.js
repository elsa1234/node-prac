var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});
        res.end("msg");
}).listen(3000,'localhost');
console.log("server started");