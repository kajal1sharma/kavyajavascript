// 1-100
// num = 1234
// num =4321

let num = 123;
let num2 =0;


for(;num!=0;){
    // console.log(num%10)
    num2 = num2*10+num%10
    num=Math.floor(num/10)
}
console.log(num2)

// loops

// iterator

// for(let a =0 ;true;a=a+1){
//     console.log("hello")
//     console.log("world")
// }

// switch(exp)

// 1=> hello
// 4=> how are you
// 8=> iam a student
// 16 => iam in college


// let choice= 2;

// switch(2**choice){
//     case choice++:console.log("this is case 1")
//             break;
//     case 2+1:console.log("this is case 2")
//             break;
//     case 3+1:
//             console.log("this is case 3+1")
            
//     case 4+1: console.log("this is case 4+1")
           
//     case 8:console.log("this is case 8");
            
//     default : console.log("no case matched")
// }