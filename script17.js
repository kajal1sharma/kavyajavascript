//patterns

// * * * * * 
// * * * * * 
// * * * * *
// * * * * *
// * * * * *


// let num =Number(prompt("HOw many stars in a line"));
// str="";
// for(let i =0 ; i<num;i++){
//    //row

//    //stars add 
//     for(let j =0;j<num;j++){
//         str =str+"* ";
//     }

//     str=str+"\n";

// }


// console.log(str)


// * 
// * *
// * * *
// * * * * 
// * * * * *

// let num =Number(prompt("HOw many stars in a line"));
// str="";
// for(let i =0 ; i<num;i++){
//    //row

//    //stars add 
//     for(let j =0;j<=i;j++){
//         str =str+"* ";
//     }

//     str=str+"\n";

// }


// console.log(str)




// # # # # * // 4 hash 1 star
// # # # * * //3 hash 2 star
// # # * * *  2hash 3 star
// # * * * *  1hash 4star 
// * * * * *  0hash 5star

let row =5;
//number of rows
let str ="";
for(let i=0;i<row;i++){
    //hash
    for(let j=row-1;j>i ;j--){ //4 3 2
        str= str+"  ";
    }
    //str="# # # # * \n# # #"
    for(let j=0 ;j<=i;j++){
        str =str+"* ";
    }
    //str = "# # # # * \n# # # * * "
    str =str +"\n";
    //str ="# # # # * \n# # # * * \n"
}

console.log(str)



// * * * * *
//   * * * * 
//     * * *
//       * *
//         * 

//* * * * *
//* * * * 
//* * *
//* *
//* 



//         * 
//       * *
//     * * *
//   * * * * 
// * * * * *
//   * * * * 
//     * * *
//       * *
//         * 


//    * 
//   * * 
//  * * *
// * * * * 
//* * * * *

// A A A A A
//   B B B B 
//     C C C
//       D D
//         E


//A B C D E
//F G H I 
//J K L
//M N
//O 








