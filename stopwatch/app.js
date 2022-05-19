let seconds=00;
let minutes=00;

let getSeconds=document.querySelector(".seconds");
let getMinutes=document.querySelector(".minutes");

let btnStart=document.querySelector(".btn-start");
let btnStop=document.querySelector(".btn-stop");
let btnReset=document.querySelector(".btn-reset");
let interval;

btnStart.addEventListener('click', () =>{
    interval = setInterval(startTimer, 100);
})

btnStop.addEventListener('click', () =>{
    clearInterval(interval);
})

btnReset.addEventListener('click', () =>{
    clearInterval(interval);
    seconds=00;
    minutes=00;
    getSeconds.innerHTML= seconds;
    getMinutes.innerHTML= minutes;
})

function startTimer(){
    seconds++;
    if(seconds<=9){
        getSeconds.innerHTML= '0' + seconds;
    }
    if(seconds>9){
        getSeconds.innerHTML= seconds;
    }
    if(seconds>60){
        minutes++;
        getMinutes.innerHTML= '0' + minutes;
        seconds=00;
        getSeconds.innerHTML= '0' + 0;
    }
    if(minutes > 9){
        getMinutes.innerHTML= minutes;
    }
}