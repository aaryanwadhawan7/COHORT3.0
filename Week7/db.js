// Cluster -> Databases -> Collections -> Documents 

const mongoose = require('mongoose');
mongoose.connect('');

// 1. Define the schema
// Schema -> class
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// User and Todo -> Objects of Schema class
const User = new Schema ({
    username : String,
    email : {type : String, unique: true},
    password : String
});


const Todo = new Schema ({
    description : String,
    taskStatus : Boolean,
    userId : ObjectId
});

// 2. Define a model
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todo', Todo);

// 3. Send the model to index.js
module.exports = {
    UserModel,
    TodoModel
};
