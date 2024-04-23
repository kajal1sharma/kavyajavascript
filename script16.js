
//async await 

async function abc(){
    async function print(){
        //async

        let promise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("hello world")    
                let a=1;
                if(a<10){
                    resolve("resolved")
                }
                
            }, 1000);
        })
        
        return  promise
    }

let res= await print();
console.log(res)
console.log("line 2")
}


abc()
console.log("line1")

//pending resolve reject

// let promise1 = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         let phoneNum=prompt("enter some number")
//         if(phoneNum.length===10){
//             //valid state
//             resolve("valid phone number")
//         }
//         else{
//             reject("invalid phone number ")
//         }
//     },1000)

// })

// console.log(promise1)

// promise1.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })






//server => data  - frontend  5sec
//async



//fetch() //data => backend 



//operation


//ffrontend


// synchronously
// function print(){
//     console.log("hello world");
// }


// console.log("line 1")
// print()
// setTimeout(()=>{
//     console.log("iam an async function")
// }, 0)
// let arr= [1,2,3,4,5]
// arr.forEach((ele)=>{
//     console.log(ele)
// })
// console.log("line 2")