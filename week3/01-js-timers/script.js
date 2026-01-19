console.log(`JS Timers`);

function sayHello(){
    console.log(`Hello World!`);
}
const button= document.getElementByID("onClick");
const statusText= document.getElementByID("status");
let timerID = null;
let isRunning =false;

button.addEventListener("Click", () => {
    if(isRunning === false){
        timerID = setTimeout(()=>{
            console.log("Timer finished");
            statusText.textContent = "Timer Finished";
            button.textContent = "Start Timer";
            isRunning=false;
        }, 5000);
        statusText.textContent = "Timer is running...";
        button.textContent = "Stop Timer";
        isRunning = true;
    }else {
    // STOP timer
    clearTimeout(timeoutId);

    statusText.textContent = "Timer is stopped";
    button.textContent = "Start Timer";
    isRunning = false;
  }

});
// let myVar=setTimeout(sayHello, 1000);
// clearTimeout(myVar, 6000);



// setTimeout(() => {
// console.log(`first message`);
// }, 5000);

// setInterval(() => {
//     console.log(`setting interval`);
// }, 3000);

// const myInterval =setInterval(function() {
//     console.log(`I'm interval`);
// }, 2000);

// clearInterval(myInterval);
// console.log (`cleared interval`);