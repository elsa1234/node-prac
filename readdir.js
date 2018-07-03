var fs = require("fs");
var path = require("path");
function readdirectory(dirpath){
    console.log("current Dir: ", dirpath);
    fs.readdir(dirpath, function(err, list){
        console.log(list);
    });
}
readdirectory("../day4");