const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();

let users = [];
const JWT_SECRET = "aaryanwadhawanisacr7fan";
app.use (express.json());


function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
};

// Cross-Origin Resource Sharing
app.use(cors());

app.get("/", function (req,res) {
  res.sendFile(__dirname + "/public/SignUp.html")
});

app.post("/signup", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    users.push({
      username: username,
      password: password,
    })

    res.send("Signup successful!");
  } catch (error) {
    res.status(422).json({
        "message" : `Signup Failed  +  ${error}`
    })
  }

  console.log(users);

});

app.post('/signin', logger,  (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => u.username == username && u.password == password);

    if (user) {
      const token = jwt.sign({
        username : username
      }, JWT_SECRET)

      res.json ({
        "token" : token
      })
    } else {
      res.json ({
        "message" : "Login Credentials doesn't matched! Try again."
      })
    }
});

function auth (req, res, next) {
  const token = req.headers.token;
  const retrieveInformation = jwt.verify(token, JWT_SECRET);

  if (retrieveInformation.username) {
    req.username = retrieveInformation.username;
    next ();
  } else {
    res.json({
      message : "You are not logged in!"
    })
  }

};

app.get('/details' ,auth, logger,  (req, res) => {

  let userFound = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      userFound = users[i];
    }
  }

  if (userFound) {
    res.json({
      username : userFound.username,
      password : userFound.password
    })
  } else {
    res.send('Authentication failed!');
  }
});

app.listen(3000, () => {
  console.log("Application is listening on port 3000.");
});
