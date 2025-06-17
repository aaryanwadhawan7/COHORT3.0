// Promise class will give you a promise, that I will return something in the future...
// A promise in Javascript is an object that represents the eventual completion (or failure) of asynchronous operation and its resulting value.

// Async task -> 1) Promise-based Approach 
//               : setTimeoutPromisified(5000).then(callback)
//               2) Callback-based Approach
//               : setTimeout(callback,5000) 

const sumOutput = document.getElementById('sumResult');

function iteratorSum(data) {
    let sum = 0;
    for (let i = 1; i <= data; i++) {
        sum = sum + i;
    }

    sumOutput.innerText = `Sum of the iterator till ${data} : ${sum}`;
}

function timer() {
    const data = parseInt(window.prompt("Enter a number :"));
    iteratorSum(data);
}

setTimeout(timer, 5000);


function promisifiedsetTimeout(time,value) {
    return new Promise( (res,rej) => {
        setTimeout(() => res(value), time);
    })
}

const num = parseInt(window.prompt("Enter a number for finding factorial :"));

function factorialNumber(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialNumber(num - 1);
}

promisifiedsetTimeout(5000, num).then((num) => {
    const result = factorialNumber(num);
        document.getElementById('factorialResult').innerText = `Factorial of the Number (${num}) is: ${result}`;
});