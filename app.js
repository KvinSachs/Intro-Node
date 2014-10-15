var http = require('http');

http.createServer(function(request, response){

    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.write("Node is running <br />Mazeltov<br />");

    setTimeout(function() {
        response.write("End of 5s process<br />");
        response.end();
    }, 2000);

    // response.write("2nd process<br />");

    // setTimeout(function() {
    //     response.write("wiggle wiggle<br />");
    //     response.write("<img src=\"http://i.imgur.com/HtpRL34.gif\"><br />");
    // }, 2000);

    // setTimeout(function(){
    //     response.write("miam miam<br />");
    //     response.write("<img src=\"http://img-9gag-lol.9cache.com/photo/aXEg2N9_460sa_v1.gif\" /><br />");
    // }, 3000);

    // setTimeout(function() {
    //     response.write("Swing baby swing<br />");
    //     response.write("<img src=\"http://img-9gag-lol.9cache.com/photo/aqZnR3Y_460sa_v1.gif\" /><br />");
    // }, 4000);


}).listen(8080);

console.log('Serveur running on 8080...');