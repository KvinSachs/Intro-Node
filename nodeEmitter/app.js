var http = require('http');


var obj1 = new (require('events')).EventEmitter();

obj1.addListener("bouh", function(){
    console.log("Le vilain clown m'a fait peur");
})

obj1.emit("bouh");