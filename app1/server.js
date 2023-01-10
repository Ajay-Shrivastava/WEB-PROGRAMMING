const http = require("http");
const fs = require("fs");

var server = http.createServer(function(req, res) {

    if(req.url==="/") {
        fs.readFile("public/index.html", function(err, data) {
            if(err)
            alert("404 error");
            else{
            res.write(data);
            res.end();
            }
        })
    }
    else if(req.url==="/registration") {
        fs.readFile("public/registration.html", function(err, data) {
            if(err)
            alert("404 error");
            else{
            res.write(data);
            res.end();
            }
        })
    }
    else if(req.url==="/dashboard") {
        fs.readFile("public/dashboard.html", function(err, data) {
            if(err)
            alert("404 error");
            else{
            res.write(data);
            res.end();
            }
        })
    }
})

server.listen(1900);
console.log("port 1900");