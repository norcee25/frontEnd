//  IIFEE (Immediately Invoked Function Expression) = Fungsi yang dipanggil secara langsung 

// 1. IIFE
// a. No params, argus & return value
// (function () {
//     console.log ("Hello World");
// })();
// // b. with params, args & return value
// // call return
// let output = (function (fullName) { 
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output);

//2. Callback Function
// a. No params, argus & return value
// function sayHello(callback) {
// callback ();
// }

// sayHello(function (){
//     console.log("Hello World"); //Callback function
// });

// b. with params, args & return value
// function sayHello(callback) {
//     let result = callback (John Doe);
//     return result;
//     }
    
//     sayHello(function (fullName){
//         return "Hello " + fullName; 
//     });
//     console.log(output)