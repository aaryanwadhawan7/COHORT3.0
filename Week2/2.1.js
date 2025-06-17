// Synchronous : Code which is executed line by line, in the order it's written.
// Typrscript 
// parsing the datatype

const fs = require("fs");

function sum (a,b) {
    return parseInt(a) + parseInt(b);
}

const result = sum (10,20); 
const result2 = sum("20",30); // concatenated reult -> 2nd argument is treated as string
console.log(`Output of Result : ${result} and Output of Result2 : ${result2}`);

// 1. I/O Heavy Operations : It involves a lot of data transfer between the program and external devices
// 1) Read a File
// 2) Start a Clock
// 3) HTTP Request

const content = fs.readFile("b.txt","utf-8",(err,data) => {
    if(err) throw err;
    console.log(data); //undefined
}); //asynchronous
console.log(content);
const fileContent = fs.readFileSync("a.txt","utf-8"); //synchronous
console.log(fileContent);

// 2. I/O Bound Task (asynchronously)
//    CPU Bound Task (for-loop with very high bound)

// 3. Fucntional Arguments 
function subtraction(a,b) {
    return a - b;
}

function addition (a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operationRes(a, b, operation) {
    // a -> 2
    // b -> 3
    // operation -> divide
    const val = operation(a,b);
    return val;
}
const ans = operationRes(2,3,divide);
console.log(`Result after arithmetic operation : ${ans}`);


