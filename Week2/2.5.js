function setTimeoutPromisified(time) {
    return new Promise( (res,rej) => {
        setTimeout(res,time);
        // res ==> callback 
    })
}
// this func will return a promise object which when resolved 
// will return callback func after time delay...

// function callback() {
//     console.log("setTimeOutPromisified fn will exec the code after 5sec");
// }

// setTimeoutPromisified(5000).then(callback);
// // this will calls the func after [time] delay



// __________________________________________________________________________________



// 1. Promise Chaining 

// setTimeoutPromisified(1000).then(() => {
//     console.log("Hi...");
//     setTimeoutPromisified(3000).then(() => {
//         console.log("Hi there...");
//         setTimeoutPromisified(5000).then( () => {
//             console.log("Hi from Aaryan Wadhawan...");
//         })
//     })
// })

// console.log("End of Promise Chaining...");



// ___________________________________________________________________________________




// Instead of above code we can write multiple promisified setTimeout func like this ->

// setTimeoutPromisified(1000).then(() => {
//     console.log("Hi...");
//     return setTimeoutPromisified(3000);
// }).then( () => {
//     console.log("Hi there...");
//     return setTimeoutPromisified(5000);
// }).then(() => {
//     console.log("Hi from Aaryan Wadhawan...");
// });

// console.log("End of Promise Chaining...");



//____________________________________________________________________________________



// Async - Await
// It is just syntatic sugar on top of promises
// async -> defines that the function is asynchronous

async function greetSequence() {
    // await -> pauses the thread/execution for duration of 1sec
    await setTimeoutPromisified(1000);
    console.log("Hi...");

    await setTimeoutPromisified(3000);
    console.log("Hi there...");

    await setTimeoutPromisified(5000);
    console.log("Hi from Aaryan Wadhawan...");
}


greetSequence();