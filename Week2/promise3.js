const fs = require('fs');

function readFile(fileName) {
    // returns the Promise object
    return new Promise( (res,rej) => {
        fs.readFile(fileName,"utf-8", (err,data) => {
            if (err) rej(err);
            res(data);
        });
    })
}

const p = readFile("a.txt");
// gets the promise obj which when resolved runs callback func


// whenever u will get the value return callback
function callback(contents) {
    console.log(contents);
}
p.then(callback);