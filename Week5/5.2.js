// Create an HTTP Server 

const express = require("express");
const app = express();

// let's  just create a global middleware 
// which asks user about the operation he/she wants to perform...

app.use("/:opType" , (req, res, next) => {
    const opType = req.params.opType;
    console.log(`Arithmetic Operation : ${opType}`);
    next();
});

app.get("/:opType" , (req , res) => {
    const {opType} = req.params;
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    let result;

    switch(opType) {
        case 'add' :
            result = a + b;
            break;
        case 'subtract' :
            result = a - b;
            break;
        case 'multiply' :
            result = a * b;
            break;
        case 'divide' :
            if (b == 0) {
                throw new Error("Can't divide a no. by Zero !");
            } else {
                result = a / b;
                break;
            }
        default :
            res.status(400).send("Invalid Operation type ! Select add, subtract, multiply or divide.");
    }

    res.json({
        Output : result
    })
});

app.listen(3000, () => {
  console.log("Express application is listening on port 3000 !");
});
