// 4.4
// Creating a ticket checking system !

const express = require('express');
const app = express();

function elgiblilityForRide (age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
};

function eligibilityForRideMiddleware (req,res,next) {
    const age = req.query.age;
    if (age > 18) {
        next();
    } else {
        res.status(403).send('You can\'t ride ! Age requirement is not fullfilled.');
    }
}

// Method - 1
// localhost:3000/ride1?age=16
app.get("/ride1" , (req , res) => {
    const age = req.query.age;
    if (elgiblilityForRide(age)) {
        res.send('Person is eligible for riding ride 1...');
    } else {
        res.status(403).send('Person is not eligible for riding ride 1...');
    }
});

// Method - 2
// localhost:3000/ride2?age=32
app.use(eligibilityForRideMiddleware);

app.get("/ride2" , (req , res) => {
    res.send("Person is eligible for riding ride 2...");
})


app.listen(3000 , () => {
    console.log('Server is listening on port 3000.');
});