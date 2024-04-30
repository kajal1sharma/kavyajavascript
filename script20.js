window.addEventListener('load',()=>{
    let head= document.getElementById('mainheading')

    let cards = document.getElementsByClassName('foodCard')
    console.log(cards)

    // how can we add random collors on each click
    cards[0].addEventListener('click',()=>{
        let h4 = document.createElement('h4')
        h4.innerText="this is a text"
        //Q :: h4.innerHTML vs h4.innerText
        cards[0].appendChild(h4);
        cards[0].style.background="pink"
    })
    cards[1].addEventListener('click',()=>{
        cards[1].style.background="yellow"
    })
    // setTimeout(()=>{
    //     head.style.backgroundColor="red"
    // },5000)
    // let inp = document.getElementById('inp')
    // inp.addEventListener('click',()=>{
    //     inp.style.color="red"
    // })
    // inp.addEventListener('input',()=>{
    //     inp.style.fontSize='32px'
    // })
    // inp.addEventListener('mouseleave',()=>{
    //     inp.style.backgroundColor="grey"
    // })
})