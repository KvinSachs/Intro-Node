var http = require('http');
var stream = require('stream');
var util = require('util');
var events = require('events');
var fs = require('fs');

var readableStream = new stream.Readable();
// console.dir(readableStream);

readableStream.setEncoding("utf8");

var content = fs.readFileSync('stream.txt');

// console.log('Stream is an instance of EventEmitter : ');
// console.log(readableStream instanceof events.EventEmitter);
// console.log('\n');
// console.dir(readableStream);

// readableStream._read = function(size) {
//     // console.log('Method _read appelée');
//     // if (content) readableStream.push('Hello');
//     // content = '';
//
//     process.stdin.removeAllListeners("data").on("data", function(chunk) {
//             readableStream.push(chunk);
//     });
// }
//
// readableStream.on('data', function(chunk) {
//     console.log('Message : ' + chunk);
// });

// Basically = to readableStream.on('data');
// var buf = readableStream.read();
// console.log(buf.length);



// readableStream.on('data', function(chunk){
//         console.log(chunk);
// });

// readableStream.push("Salut !");
// readableStream.push("Bonjour !");

var writableStream = new stream.Writable();

writableStream._write = function(chunk, enconding, callback){

    console.log('Appel de la méthode _write');
    callback();
}

writableStream.on('error', function(err){
    console.log(err);
});

function callback(data) {
    console.log('Appel de callback - fin de ' + data);
}
function callbackEnd() {
    console.log('Fermeture du stream');
}

var write1 = writableStream.write('Hello', 'utf8', callback('write1'));
var write2 = writableStream.write('150768543', callback('write2'));
var writeEnd = writableStream.end('150768543', callbackEnd());
var write4 = writableStream.write('150768543', callback('write4'));

console.log('Retour write1 = ' + write1);
console.log('Retour write2 = ' + write2);
console.log('Retour writeEnd = ' + writeEnd);
console.log('Retour write4 = ' + write4);
