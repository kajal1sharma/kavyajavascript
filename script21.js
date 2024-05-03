
window.addEventListener('load',()=>{
    let load = document.getElementById("loadButton")
    let list = document.getElementById("list")
    load.addEventListener('click',async ()=>{
        let result = await fetch("https://dummyjson.com/todos")
        result = await result.json();
        console.log(result )

        for(let i =0;i< result["todos"].length; i++){
            let text = result.todos[i].todo;
             console.log(text)
            let li = document.createElement('li')
            let span = document.createElement('span')
            if(result.todos[i].completed===true){
                span.innerText="completed"
                span.style.backgroundColor="green"
            }
            else{
                span.innerText="pending"
                span.style.backgroundColor="red"
            }
            
            li.textContent = text;
            li.appendChild(span)
            
            list.appendChild(li);

        }

    })

})

// async function getInfo(){
//     let result = await fetch("https://dummyjson.com/todos")
//     console.log(result )
//     result = await result.json();
//     console.log(result)
// }

// getInfo()


// window.addEventListener('load',()=>{
//     let button1 = document.getElementById('button1')
//     let circle = document.getElementById('circle')


//     button1.addEventListener('click',()=>{
//         let r = Math.floor(Math.random()*1000)%255
//         let g = Math.floor(Math.random()*1000)%255
//         let b = Math.floor(Math.random()*1000)%255
//         circle.style.backgroundColor=`rgb(${r},${g},${b})`
//     })
// })