window.addEventListener('load',()=>{
    let button1 = document.getElementById('button1')
    let circle = document.getElementById('circle')


    button1.addEventListener('click',()=>{
        let r = Math.floor(Math.random()*1000)%255
        let g = Math.floor(Math.random()*1000)%255
        let b = Math.floor(Math.random()*1000)%255
        circle.style.backgroundColor=`rgb(${r},${g},${b})`
    })
})