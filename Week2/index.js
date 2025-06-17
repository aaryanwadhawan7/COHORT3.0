console.log("Start Execution !");

function timeOut() {
    console.log("setTimeout function executes the timeOut callback after 1sec")
}
setTimeout(timeOut , 1000); // I/O Bound Task

// CPU Intensive Task : takes around 3-4sec
let c = 1;
for (let i = 1; i < 1000000; i++) {
    c = c + 1;
}

console.log("Done!");

/*
Start Execution !
Done!
setTimeout() will execute...
*/ 
