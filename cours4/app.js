var http = require('http');
var fs = require('fs');
var util = require('util');
var url = require('url');

var server = http.createServer(function(req, res) {

    var path = url.parse(req.url).pathname;

    if(path === "/envie" && path !== "/favicon.ico") {

        fs.exists("envie.html", function(exists) {

            if(exists) {
                var index = fs.createReadStream('envie.html');
                index.pipe(res);
            } else {
                res.writeHead(404, "Content-Type: text/html");
                res.write("Erreur 404 ma gueule");
                res.end();
            }
        });

    } else {

        var index = fs.createReadStream('index.html');
        index.pipe(res);
    }

}).listen(4000);
