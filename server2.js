var http = require('http'), response;
var fs = require("fs");
var path = require("path");
var model = {
    status:"on",
    update:function(s){
        model.status=s;
        view.display();
    }
}

var view = {
    //dynamic:"home",
    display:function(data){
        if(data!=undefined){
            view.dynamic = data;
        }
        var html = `<html>
                        <head>
                            <title>DEMO MVC</title>
                        </head>
                        <body>
                            <div>${model.status}</div>
                            <a href="/">HOME</a>
                            <a href="/on">on</a>
                            <a href="/off">off</a>
                            <a href="/login">Login</a>
                            <div>${view.dynamic}</div>
                        </body>
                    </html>
                `;
                response.writeHead(200,{"Content-Type":"text/html"});
                response.end(html);
    }
}
http.createServer(function(req, res){
    response = res;
    if(req.url==="/on")
        model.update('on');
        else if(req.url==="/off")
        model.update("off");
        else if(req.url==="/login"){
        fs.readFile("login.html", function(err, data){
            model.update(data.toString());
        });
}
else if(req.url==="/")
    view.display("home");
else if(req.url==="/files"){
    function rrr(basepath="../day4"){
        fs.readdir(basepath, function(err, list){
            for(var i in list){
                var fullpath = path.join(basepath, list[i]);
                (function(fullpath){
                    fs.stat(fullpath, function(err, stats){
                        if(stats.isFile()){
                            console.log(fullpath);
                        }
                        else if(stats.isDirectory()){
                            rrr(fullpath);
                        }
                    });
                })(fullpath);
            }
        });
    }
    rrr();
    }
    else
        view.display();
}).listen(3000,"localhost");
console.log("server Running at http://localhost:3000");