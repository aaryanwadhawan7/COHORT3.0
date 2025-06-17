/* 
Facts/Callouts :

1. React, NextJS are frameworks. They compile down to HTML, CSS, JS in the end. 
That is what your browser understands.
2. When you run your C++ code on Leetcode, it does not run your browser/machine. It runs somewhere else.
Your browser can't (almost) compile and run your C++ code.
3. If someone asks - What all languages can your browser interpret, the answer is HTML, CSS, JS and WebAssembly. 
It can, technically, run C++/Rust code that is compiled down to Wasm (Web Assembly).

Properties of JS :

1). Interpreted Language : Compiled at run-time meaning it's executed line-by-line at runtime by Javascript engine in the browser or server environement, rather than being compiled into machine code beforehand.
JS Code ===> Runs on your machine.

    Compiled Language : Language(like C++) is first converted into Binary and then runs on our local machine.
                        Command -> 'g++ a.cpp -o out' [High-level Cpp code is converted into Low-level Binary Code] 
                                   './out'

2). Dynamically Typed Language : Variables in Javascript are not bound to specific data type. 
                                 Types are determined at runtime and can change as the program executes. 

3). Single-threaded : Javascript executes code in a single-threaded environment, meaning it processes one task at a time.
(Rust/C++ => Multi-threaded)

4). Garbage Collector -> Memory Management
*/

const arr = ['Aaryan','Kiwi', 'Siddhant'];

function greet(arr) {
    for(let name in arr) {
        console.log('Hello,' + arr[name] + '!');
        console.log('\n'); 
    }
}

const id = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push({
            [arr[i]] : i+1
        })
    }
    return result;
}

// greet(arr);
//console.log(id(arr));

// Create a function that takes an array as input, 
// and returns the users whose age > 18 and are male.

let users = [
    {
    userName : 'Aaryan',
    age : 22,
    gender : 'male',
    country : 'India'
}, {
    userName : 'Kiwi',
    age : 5,
    gender : 'female',
    country : 'india'
}, {
    userName : 'Mr. Narendra Modi',
    age : 42,
    gender : 'male',
    country : 'India'
}
]

// Method - 1
const fn = (users) => {
    for(let i = 0; i < users.length; i++) {
        // users[i] -> objects
        if (users[i].age > 18 && users[i].gender == 'male') {
            console.log(`${users[i].userName} is a developer from ${users[i].country}`);
        }
    }
}

// Method - 2
// Define a filtering fn -> Return true or false based on set on conditions

const fn2 = (users) => {
    return users.filter((user) => {
        return user.age > 18 && user.gender == 'male';
    });
}

console.log(fn2(users));