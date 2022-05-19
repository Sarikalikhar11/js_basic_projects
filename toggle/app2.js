// console.log(typeof document);

// const ele=document.getElementById('car');

// console.log(ele);

// ele.style='background-color:red; color:white;';

// ele.classList.add("dark");

// ele.classList.remove("dark");

// console.log(ele,classList);

// const ele=document.getElementsByClassName('item');

// const ele=document.querySelector('.item');
// console.log(ele);

// const body=document.querySelector('body');
// const buttons=document.querySelector('button');

// function toggle(){
//     if(body.classList.contains('light')){
//         body.classList.remove('light');
//         body.classList.add('dark');
//     }else{
//         body.classList.remove('dark');
//         body.classList.add('light');
//     }
// }

let ball=document.querySelector('.toggle_ball');
let counter=0;

ball.addEventListener('click',changeMode);

function changeMode(){
    counter++;
    if(counter % 2 == 0){
       ball.style.transform='translateX(-35px)';
       document.body.style.backgroundColor = 'black';
       document.body.style.color='white';
    }else{
      ball.style.transform='translateX(0px)';
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
    }
}






