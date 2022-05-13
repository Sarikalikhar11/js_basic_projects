const inc=document.querySelector('.btn1');
const dec=document.querySelector('.btn2');


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