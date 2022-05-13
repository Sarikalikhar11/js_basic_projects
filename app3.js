
const counter=document.querySelector('#counter');
const val=document.querySelectorAll('.btn-counter');


function increment(){
    let val=counter.innerHTML;
    val++;
    counter.innerHTML=val;
    
}
function decrement(){
    let val=counter.innerHTML;
    val--;
    counter.innerHTML=val;
   
}