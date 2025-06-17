const { UserModel, TodoModel } = require("./db");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const zod = require('zod');
const JWT_SECRET = "aaryanistired";
const app = express();


app.use(express.json());


app.post("/signup", async (req, res) => {
  try {

    // input validation : it restricts user to add data which is required

    const requiredBody = zod.object({
      username : zod.string().min(8).max(15),
      email : zod.string().min(10).max(15).email(),
      password : zod.string().min(5).max(15)
    })


    // const parseData = requiredBody.parse(req.body);  
    // [OR]
    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
      res.json({
        message : "Invalid Format"
      })
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    // 10 is the specified number of salt rounds
    // console.log(hashedPassword);


    // This will return a promise
    await UserModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.json({
      message: "You are SignedUp successfully!",
    });
  } catch (error) {
    res.json({
      message: "Put valid credentials to SignUp!",
    });
  }
});


app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check user if email will be matched
  const user = await UserModel.findOne({
    email: email
  });

    if (user) {
      // token is encoded/sign via user._id
      const checkHashedPassword = await bcrypt.compare(password, user.password);

      if (checkHashedPassword) {
      const token = jwt.sign(
        {
          userId: user._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        token: token,
      });

      console.log(token);
    } else {
      res.status(403).json({
        message : "Invalid Credentials!"
      })
    }
  } else {
    res.status(403).json({
      message : "Invalid Credentials!"
    })
  } 
});


function auth(req, res, next) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  console.log(decodedInfo);

  if (decodedInfo) {
    req.userId = decodedInfo.userId;
    next();
  } else {
    res.status(403).json({
      message: "Authentication Error! Try with valid credentials.",
    });
  }
};


// Authenticated
app.post("/todo",auth , async (req, res) => {
  const description = req.body.description;
  const taskStatus = req.body.taskStatus;
  const userId = req.userId;

  try 
  {
    await TodoModel.create({
    description : description,
    taskStatus : taskStatus,
    userId : userId
  });

  res.json({
    message : "Todo task added successfully!"
  })
} catch (error) {
  res.json({
    message : "Todo task added. Try again!"
  })
}
});


// Authenticated
app.get("/todos",auth , async (req, res) => {
  // print all todos
  try {
    const todos = await TodoModel.find({
      userId : req.userId
    });

    res.json({todos});
  } catch (error) {
    res.status(500).json({
      message : "Error fetching todos!"
    })
  }
});


app.listen(3000);
