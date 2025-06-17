/* 
HTTP Methods 

1. GET : User can check how many kidneys they have and their health
2. POST : User can add a new kidney
3. PUT : User can replace a kideny, make it healthy 
4. DELETE : User can remove a kidney
*/

const express = require("express");
const app = express();

let user = [{
    name : 'Aaryan',
    // kidenys : array of objects
    kidneys : [{
        healthy : false
    }]
}];

// Middleware
app.use(express.json());

app.get("/", (req,res) => {
    const noOfKidneys = user[0].kidneys.length;
    // we will iterate over the kidneys and check for status
    let noOfHealthyKidney = 0; // keeps track of healthy kidney

    for(let i = 0; i < noOfKidneys; i++) {
        const healthyKidney = user[0].kidneys[i].healthy; // true or false
        if (healthyKidney) {
            // kideny is healthy
            noOfHealthyKidney++;
        }
    }

    const unhealthyKidney = noOfKidneys - noOfHealthyKidney;
    res.json({
        noOfKidneys,
        noOfHealthyKidney,
        unhealthyKidney
    })
});

app.post("/addKidney", (req,res) => {
    // adding required data to request body
    const {isHealthy} = req.body.isHealthy;

    user[0].kidneys.push({
        healthy : isHealthy
    })

    res.send({
        'Kidney-Added' : 'Done!'
    })
});

app.put("/operationStatus", (req,res) => {
    // iterate over the kidneys and the moment we will find unhealthy kideny
    // then we make it healthy

    const noOfKidneys = user[0].kidneys.length;
    for (let i = 0; i < noOfKidneys; i++) {
        if(!user[0].kidneys[i].healthy) {
            // kidney not healthy
            user[0].kidneys[i].healthy = true;
            break;
        }
    }

    res.send("Operation is successfully completed...");
});



app.delete("/" , (req,res) => {
    // we can remove a particular kidney by splice arr method
    // or just remove the last kidney from the user by pop method :
    // user[0].kidneys.pop(); 

    let newKidney = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (atleastOneUnhealthyKidney()) {
            newKidney.push({
                healthy : true
            })
            user[0].kidneys = newKidney;
            res.json({
                msg : 'done !'
            })
        } else {
            res.status(411).json({
                status : 'Patient has no bad kidneys.'
            })
        }
    }
});

function atleastOneUnhealthyKidney() {

    let unhealthyKidneys = false;
    for(let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            // kidney not healthy
            unhealthyKidneys = true;
        }
    }

    return unhealthyKidneys;
};

app.listen(3001, () => {
    console.log('Server is currently running on port 3001.')
});

