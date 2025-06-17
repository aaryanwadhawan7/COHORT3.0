// Creating an express app

// Prerequisites :

/* 
1. Initialize an empty NodeJS project [npm init -y]
2. Create an [index.js] file, open the project in VS Code
3. Add express as a dependency
4. Create a two post routes one for signing in and one for signing up
5. Use the express.json middleware to parse the post request body
6. Write the signup endpoint and add username and password to users global variable
7. Generate the token which when during signing up is added to users global variable
-> The moment you signedin and your credentials are authenticated then backend server provide you with token.

   Tokens VS JWTs -> There is problem with stateful tokens.
   [ Stateful means that we need to store these tokens in a variable rn... ]

   When we hit a endpoint '/me' it matches token in the req header with token stored in users and 
   suppose there are 1000s of user then this increases TC task.

   PROBLEM : The problem is that we need to send a request to the database every time the user wants to hit an authenticated endpoint.
   JWTs solve this stateful problem.

   JWT (JSON Web Tokens) -> JSON Web Tokens are self contained way to represent information b/w 2 parties.
   JWTs contained all the data needed for authentication.
    
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

let users = [];
const JWT_SECRET = "aaryanisabigfanofcristianoronaldo";
app.use(express.json()); // middleware

// function tokenGenerator () {
//     let options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//         'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
//     '0','1','2','3','4','5','6','7','8','9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         token += options[Math.round(Math.random() * options.length)];
//     }

//     return token;
// };

app.post("/signup", (req, res) => {
  // user will provide username and password in the req body
  const username = req.body.username;
  const password = req.body.password;

  // push the user details to users global variable
  users.push({
    username: username,
    password: password,
  });

  res.send("Signedup successfully...");

  console.log(users);
});

app.post("/signin", (req, res) => {
  // During signin, authentication take place which checks user credential
  const username = req.body.username;
  const password = req.body.password;

  // check username and password
  // initially, user not found yet...

  // Method-1
  // let userFound = null;
  // for (let i = 0; i < users.length; i++) {
  //     // users[i] -> object
  //     if (users[i].password == password && users[i].username == username) {
  //         userFound = users[i];
  //     }
  // }

  // Method-2
  const user = users.find(
    (u) => u.username == username && u.password == password
  );
  // this var will return you the users[i] (object) if authentication is done successfully.

  // const token = tokenGenerator();

  if (user) {
    //user.token = token;
    const token = jwt.sign(
      {  
        username: user.username,
      },
      JWT_SECRET
    );
    // convert their username over a jwt

    res.json({
      "Jwt" : token,
    })
  } else {
    res
      .status(400)
      .send(
        "Username and password doesn't match. Try with different credentials."
      )
  }

  console.log(users);
});

app.get("/me", function (req, res) {

  const token = req.headers.token; // jwt
  const decodedInformation = jwt.verify(token, JWT_SECRET); 
  const username = decodedInformation.username;
  // { username : "aaryanwadhawan777@gmail.com" }

  let userFound = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      userFound = users[i];
    }
  }

  if (userFound) {
    res.json({
      username: userFound.username,
      password: userFound.password,
    })
  } else {
    res.json({
      message: "Invalid Request",
    })
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
}); // express application will listen on port 3000
