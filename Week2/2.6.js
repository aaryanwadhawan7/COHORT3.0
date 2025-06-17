// Filter, Map and Arrow Functions 

// function sum(a,b) {
//     return a + b;
// }

// Arrow Function 
const sum = (a,b) => {
    return a + b;
}
// console.log(sum(1,2));


// ____________________________________________________________


// given an array, give me back a new array in which every element
// is multiplied by 2.

/// Solution
 const arr = [2,3,4,56,67,554,2];
// const newArr = [];

// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
// }

// console.log(newArr);


// __________________________________________________________


/// Another Solution 
// map fn ---> needs a tranform func 
function transform(i) {
    return i * 2;
}

const newArr = arr.map(transform);
// console.log(newArr);


// ___________________________________________________________


// Filter ---> needs filtering logic func
// given an arr, generate a new array such that it has only even no.s

function filterLogicFn(num) {
    if (num % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

const brr = arr.filter(filterLogicFn);
// console.log(brr);


// ___________________________________________________________

// Assignment -> write a map function which take 2 i/p arr and 
// transform fn/callback and transforms the new arr based on 
// transform fn.

function transfromFn(arr) {
    const brr = [];
    for(let i = 0; i < arr.length; i++) {
        brr.push(arr[i] * 2);
    }
    return brr;
}

function map(arr,transfromFn) {
    const newArr = transfromFn(arr);
    return newArr;
}

console.log(map(arr,transfromFn));