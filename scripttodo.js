
let inp = document.getElementById('inp');
let btn =document.getElementById('btnAdd');
let list = document.getElementById('list')
let str="";

inp.addEventListener('input',(event )=>{
    str= event.target.value
    console.log(str)
})

btn.addEventListener('click',()=>{
    if(str.length !==0 && str!==null && str!==undefined){
    let listitem = document.createElement('li');

    listitem.innerText=str;
    let removeBtn = document.createElement('button')
    removeBtn.innerText = "X";
    listitem.appendChild(removeBtn)
    list.appendChild(listitem)

    
    removeBtn.addEventListener('click',()=>{
        list.removeChild(listitem)
    })

    
    }
})

