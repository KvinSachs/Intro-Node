var fs = require('fs');
var stream = require('stream');

var data  = fs.readFileSync('myFile.txt');

console.log('Début - ' + data + ' - Fin');
