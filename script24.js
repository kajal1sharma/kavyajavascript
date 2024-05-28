//singleton

// account =>  object {name:kavya} => 


    class Account{
        constructor(para1, para2){
            this.name=para1;
            this.roll=para2;
            
        }
       


    }

    Account.prototype.print= function(){
        console.log(this.name)
    }


    let obj1 = new Account("kavya",19)
    let obj2 = new Account("vishnu",78)
    let obj3 = new Account("priya",54)
    let obj4 = new Account("tarun",23)
    console.log(obj1.print())
    console.log(obj2.print())
    console.log(obj3.print())
    console.log(obj4.print())

    // let kavyaacc= {
    //     acc:89890,
    //     name:"yfhv",
    //     age:90
    // }
    // let tina ={
    //     acc:89890,
    //     name:"yfhv",
    //     age:90
    // }
    // let rohit ={
    //     acc:89890,
    //     name:"yfhv",
    //     age:90
    // }


// let obj={
//     name: " pooja",
//     age: 45,
//     print:function(){
//         console.log("hello world")
//     }
// }

// console.log(obj.age)
// console.log(obj["name"])



// let arr =[9,7,5,3,89]
// arr[0]
// let obj2= {
//     0:9,
//     1:7,
//     2:5,
//     3:3,
//     4:89,
//     length:5

// }

