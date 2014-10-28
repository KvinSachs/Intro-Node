var fs = require('fs');

fs.readFile('myFile.txt', function(err, data) {
    if (err !== null)
        console.log(err);
    else
        console.log(data);
});

console.log('- Suite du programme');
