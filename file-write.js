var fs= require('fs');
var http=require('http');
fs.writeFile("./data.txt","datafgjjjmnhbhf",
function(error){
    if(error){
        console.log(error);
    }else{
        console.log("file written");
    }
})