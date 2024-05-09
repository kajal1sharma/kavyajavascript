let buttons = document.getElementsByTagName('button')
console.log(buttons)

let input ="0";

function toggle(){
    if(input ==="0"){
        input="X";
    }
    else{
        input="0"
    }
}


for(let i=0;i<9;i++){
    buttons[i].addEventListener('click',()=>{
        buttons[i].textContent=input;
        toggle();
    })
}

// buttons[0].addEventListener('click',()=>{
//     buttons[0].textContent=input;
//     toggle();
// })
// buttons[1].addEventListener('click',()=>{
//     buttons[1].textContent=input;
//     toggle();
// })
// buttons[2].addEventListener('click',()=>{
//     buttons[2].textContent=input;
//     toggle();
// })
// buttons[3].addEventListener('click',()=>{
//     buttons[3].textContent=input;
//     toggle();
// })
// buttons[4].addEventListener('click',()=>{
//     buttons[4].textContent=input;
//     toggle();
// })
// buttons[5].addEventListener('click',()=>{
//     buttons[5].textContent=input;
//     toggle();
// })
// buttons[6].addEventListener('click',()=>{
//     buttons[6].textContent=input;
//     toggle();
// })
// buttons[7].addEventListener('click',()=>{
//     buttons[7].textContent=input;
//     toggle();
// })
// buttons[8].addEventListener('click',()=>{
//     buttons[8].textContent=input;
//     toggle();
// })










