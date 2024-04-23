
function abc(a=0, b=1, c=2){
    console.log(a)
    console.log(b)
    console.log(c)
}

// abc(45,78,56,34)
// abc()
// console.log("================")
// abc(12)
// console.log("================")
// abc(15, 56)
// console.log("================")
// abc(45,90,67)


// arrays

let arr =[45,67,98,68,97];
arr.push
arr.length
arr.pop
arr.shift
arr.unshift
arr.at
arr.concat
arr.fill
arr.findIndex
arr.toString
// question => value which are odd until you find any even
// let callback =(val,index)=>{
   
//     if(val%2==0){
       
//         return false;
//     }
//     else{
//         console.log(val)
//         return true
//     }
// }

// arr.every(callback)


// oddSum , evenSum
// let oddSum =0;
// let evenSum =0;
// function print(param){
//    if(param%2==0){
//     evenSum+=param
//    }
//    else{
//     oddSum+=param
//    }
// }

// arr.forEach(print)//print => callback fubctio
// console.log(evenSum)
// console.log(oddSum)


// sum of all the elements of the array


// let sum = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
// console.log(sum)

// let arr=["ghfghfg",54535,"jthrfg",989,767,434];

// console.log(arr[0])

// let obj = {
//     key:"dgf",
//     key2:"uityurf"
// }

// console.log(obj["key"])



// first class citizens
// function => variable store 

// javascript functional progr.....
// function print(a){
//     console.log(a)
//     a()
//     return a;
// }

// let b= ()=>{console.log("iam an arrow func")}
// let c= print(b)
// c()