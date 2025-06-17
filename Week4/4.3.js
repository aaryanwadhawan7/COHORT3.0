const express = require("express");
const app = express();

// Sum -> [ 1 to n ]

// function sum(n) {
//     let sum = 1;
//     for(let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }

//     return sum;
// }

const users = [
  {
    firstName: "Aaryan",
    secondName: "Wadhawan",
    id: 197,
    metadata: {
      role: "developer",
      branch: "Cyber Security",
      "sub-domain": "Digital Forensics",
    },
  },
];

app.get("/", function (req, res) {
  const userData = users[0];
  res.send(
    `Username : ${userData.firstName} ${userData.secondName} , 
            Id : ${userData.id}`
  )
});

app.use(express.json());

app.post("/addUser", (req,res) => {
  // taking req params from the user 
  const { fName, sName, userID, sRole, branch, sBranch } = req.query;

  if (!fName || !sName || !userID ) {
    return req.statusCode(400).send('Missing user details in the requset body.')
  }

  users.push({
    firstName : fName,
    secondName : sName,
    id : userID,
    metadata : {
      role : sRole,
      branch,
      "sub-domain" : sBranch
    }
  })
  res.send('User data added successfully...');
});

app.put("/patchUser", (req,res) => {
  // change the userID
  const userData = users[0];
  const newId = req.query.id;

  if (!newId) {
    return res.status(400).send("Please provide a new ID in the query string (e.g., ?id=123).");
  }

  userData.id = newId; // ID updated 
  res.send(`User ID for ${userData.firstName} ${userData.secondName} updated to ${userData.id}.`);
});

app.delete("/deleteUser", (req,res) => {
  const id = users[0].id;
  const deleteUser = users.pop();
  if (deleteUser) {
    // User deleted 
    res.send(`User ID : ${id}, deleted successfully.`);
  } else {
    // User not deleted 
    res.status(404).send("No users let to delete.");
  }
});
  

app.listen(3000 , () => {
  console.log("Server currently running on https://localhost:3000.");
});

// POST Method Request params :
// http://localhost:3000/addUser?fName=John&sName=Doe&userID=198&sRole=analyst&branch=Cyber%20Security&sBranch=Network%20Security

// PUT Method 
// http://localhost:3000/patchUser?id=128

// DELETE Method
// http://localhost:3000/deleteUser
