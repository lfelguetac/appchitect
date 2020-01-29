import fs = require('fs');


fs.readFile('./texto.txt','utf-8', (err, data) => {
    console.log(data);
    
});