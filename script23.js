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

function checkWinner(){
    // row

    if(buttons[0].textContent===input && buttons[1].textContent===input && buttons[2].textContent===input ){
        return true;
    }
    else if(buttons[3].textContent===input && buttons[4].textContent===input && buttons[5].textContent===input){
        return true;
    }
    else if(buttons[6].textContent===input && buttons[7].textContent===input && buttons[8].textContent===input){
        return true;
    }
    else if(buttons[0].textContent===input && buttons[3].textContent===input && buttons[6].textContent===input){
        return true;
    }
    else if(buttons[1].textContent===input && buttons[4].textContent===input && buttons[7].textContent===input){
        return true;
    }
    else if(buttons[2].textContent===input && buttons[5].textContent===input && buttons[8].textContent===input){
        return true;
    }
    else if(buttons[0].textContent===input && buttons[4].textContent===input && buttons[8].textContent===input){
        return true;
    }
    else if(buttons[2].textContent===input && buttons[4].textContent===input && buttons[6].textContent===input){
        return true;
    }
    else{
        return false;
    }
}

let winner = "";

for(let i=0;i<9;i++){
    buttons[i].addEventListener('click',()=>{
        if(winner===""){
        if(buttons[i].textContent==="."){
        buttons[i].textContent=input;
        if(checkWinner()===true){
            console.log("winner : "+input)
            winner =input;
            return;
        }
        toggle();
        }}
        else{
            return;
        }
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










