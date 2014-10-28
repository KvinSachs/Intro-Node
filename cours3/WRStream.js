var stream = require('stream');
var fs = require('fs');

//////////////////
/// writableStream

var writableStream = new stream.Writable();

writableStream._write = function(chunk, encoding, callback) {

    console.log('Appel de la méthode _write : ' + chunk);
    callback();
}

writableStream.on('error', function(error) {
    console.log(error);
});

function callback(data) {
    console.log('Appel de callback - fin de ' + data);
}


//////////////////
/// readableStream

var readableStream = new stream.Readable();

readableStream.setEncoding('utf8');

readableStream._read = function(size) {

    process.stdin.removeAllListeners('data').on('data', function(chunk) {
        readableStream.push(chunk);
    });
}

readableStream.on('data', function(chunk) {
    console.log(chunk);
});

///////////
/// Process

readableStream.pipe(writableStream);
