var fs = require('fs');

// fs.readFile('myFile.txt', function(err, data) {
//     if (err !== null)
//         console.log(err);
//     else
//         console.log(data);
// });
//
// console.log('- Suite du programme');

fs.open('myFile.txt', 'r', function(err, fd) {

    var myBuf = new Buffer(100);

    // fd -> file descriptor
    fs.read(fd, myBuf, 0, myBuf.length, 0, function(err, bytesRead, data) {
        console.log('Nombre d\'octet lus : ' + bytesRead);
        console.log('data : ' + data.toString());
    });
});
