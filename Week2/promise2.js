function setTimeoutPromisified(time) {
    // Task -> exec a callback func after time (delay)
    return new Promise((res) => {
        setTimeout(message,time);
    });
}

function message() {
    console.log("Callback function console a statement after 5sec");
}

setTimeoutPromisified(5000).then(message); // instance/object of Promise class

// 1. define a setTimeoutPromisified fn which will exec a callback fn after 5sec
// 2. define message or callback fn
// 3. what does setTimeoutPromisified fn do ? 
// Ans : returns a promise obj that it can either give response or reject a callback func...