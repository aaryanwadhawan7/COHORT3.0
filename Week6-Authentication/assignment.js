//  Q1) Write a function which takes the username and password and
// returns a JWT token with the username encoded. Should return null if the username is not valid email or
// password is less than six characters. Try using zod library here.


// Anyone can see the contents of the JWT but only the server that signed it can verify it.
const jwt = require("jsonwebtoken");
const zod = require('zod');

const JWT_SECRET = "aaryanisrealmadridfan";
const username = "aaryanwadhawan777";
const email = "aaryanwadhawan777@gmail.com";
const password = "sid";

function signJWT (username, email, password) {
    // Input validation
    const reqdEmail = zod.string().min(10).max(20).email();
    const reqdPassword = zod.string().min(6).max(15);
    const usernameResponse = reqdEmail.safeParse(email);
    const passwordResponse = reqdPassword.safeParse(password);

    try {
      if (!usernameResponse.success && passwordResponse.success) {
        return null;
      } else {
        // generate/sign a token
        const signature = jwt.sign(username, JWT_SECRET);
        return signature;
      }
    } catch (error) {
        console.log(`Invalid credentials! Try again.`);
    }
}

// console.log(`Token -> ${signJWT(username, email, password)}`); 
const token = signJWT(username, email, password);


// Q 2
function decodeJWT(token) {
    // true or false
    const decodedToken = jwt.decode(token);
    if (!decodedToken) {
        return false;
    }

    return true;
}

// console.log(decodeJWT(token));

function verifyJWT (token) {
    // true or false
    const isTokenVerified = jwt.verify(token, JWT_SECRET);
    if (!isTokenVerified) {
        return false;
    }

    return true;
}

console.log(verifyJWT(token));
