console.log("hello world");

const clbutton = document.getElementById("onClick");
const message = document.getElementById("msg");
clbutton.addEventListener("click", () =>{
// Show the message
    message.style.display="block";

// Hide it after 5 seconds
setTimeout(()=>{
    message.style.display ="none";
},5000);

});

let seconds = 0;
let timerID =null;
const timerButton= document.getElementById("sttimer");
const message1 = document.getElementById("msg1");

timerButton.addEventListener("click", ()=>{
    if(timerID===null){
        timerID=setInterval(()=>{
            seconds++;
            message1.textContent = seconds;
        },1000);
        timerButton.textContent= "Stop";
    }
    else{
        clearInterval(timerID);
        timerID=null;
        timerButton.textContent="Start";
        seconds=0;
        message1.textContent="0";
    }
   
}
);