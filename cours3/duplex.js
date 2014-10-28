var stream = require('stream');
var fs = require('fs');

//////////////////
/// writableStream

var duplexStream = new stream.Duplex();

duplexStream._write = function(chunk, encoding, callback) {

    console.log('Ecrit sur la méthode duplex : ' + chunk);
    callback();
}

duplexStream.on('error', function(error) {
    console.log(error);
});

function callback(data) {
    console.log('Appel de callback - fin de ' + data);
}

duplexStream.setEncoding('utf8');

duplexStream._read = function(size) {

    process.stdin.removeAllListeners('data').on('data', function(chunk) {
        chunk.toString().replace(/[\d\n]/g, "");
        duplexStream.push(chunk);
        duplexStream.write(chunk);
    });
}

duplexStream.on('data', function(chunk) {
    console.log('Lu sur le stream duplex : ' + chunk);
});
