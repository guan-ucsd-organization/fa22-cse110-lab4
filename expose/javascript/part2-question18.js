// console.log(time);

function timeFunction(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// Every seconds.
setInterval(timeFunction, 1000);