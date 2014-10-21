var http = require('http');
var events = require('events');
var colors = require('colors');

var e = events.EventEmitter();

e.addListener('evenement', function() {
    console.log('l\'objet 1 a bien reçu un évènement');
});

var server = http.createServer(function(request, response){

    response.writeHead(200);
    response.setHeader("Content-Type", "text/html");
    response.write('<h3>Salut bolosse</h3>');
    response.end();

}).listen(4000);

console.log("Serveur démarré sur le port 4000");