// JavaSript Function

// Cara 1. Function Declaration
// function greetings1(){
//     console.log("Hello World");
// }

// greetings1(); // Call/Execute Function

// // Cara 2. Function Expression
// let greetings2 = function(){
//     console.log("Hello World");
// };
// greetings2();


// Parameter & Argument (input), Return (Output)
// // Cara 1.
// //                  parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //                       argument
// let output1 = greetings1("John Doe");
// console.log(output1);

// // Cara 2.
// let greetings2 = function (fullName){
//     return "Hello " + fullName;
// }
// let output2 = greetings2("John Doe");
// console.log(output2);

// // Cara 1.
// //                       argument
// let output1 = greetings1("John Doe");
// console.log(output1);
// //                  parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }

// Cara 2. ERROR krn variabel harus di deklarasikan terlebih dahulu


//GLOBAL  SCOPE & LOCAL SCOPE
let x = 10; //Global, bisa diakses didalam maupun diluar funsi

function foo(){
    let y = 20; //local function
    console.log(x); // 10
    console.log(y); // 20
    if (y > 10){
        let z = 30; //Local block
        console.log(x); // 10
        console.log(y); //20
        console.log(z); //30
    }
}

console.log(x);
// console.log(y); //ERROR
foo();