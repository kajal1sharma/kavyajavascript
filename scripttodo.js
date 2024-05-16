
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

    let inputbox  = document.createElement('input')
    inputbox.value=str
    inputbox.style.border ="none"
    inputbox.disabled = true;
    listitem.appendChild(inputbox)
    let removeBtn = document.createElement('button')
    removeBtn.innerText = "X";
    let editBtn = document.createElement('button')
    editBtn.innerText = "edit";
    listitem.appendChild(removeBtn)
    listitem.appendChild(editBtn)
    list.appendChild(listitem)


    removeBtn.addEventListener('click',()=>{
        list.removeChild(listitem)
    })

    editBtn.addEventListener('click',()=>{

        inputbox.disabled=false;
        inputbox.style.border="1px solid black"
        inputbox.focus=true;

        inputbox.addEventListener('input',(event)=>{
            let size =event.target.value.length;
                if(event.target.value.charAt(size-1)==="p")
                    {
                        inputbox.value=event.target.value
                        inputbox.style.border="none";
                        inputbox.disabled=true;
                    }
        }) 

    })
    
    }
})

