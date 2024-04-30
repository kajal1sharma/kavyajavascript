window.addEventListener('load',()=>{
    let head= document.getElementById('mainheading')
    setTimeout(()=>{
        head.style.backgroundColor="red"
    },5000)
    let inp = document.getElementById('inp')
    inp.addEventListener('click',()=>{
        inp.style.color="red"
    })
    inp.addEventListener('input',()=>{
        inp.style.fontSize='32px'
    })
    inp.addEventListener('mouseleave',()=>{
        inp.style.backgroundColor="grey"
    })
})