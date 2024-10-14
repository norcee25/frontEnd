// Ubah/Modifikasi exercise 1 menggunakan

// 1. IIFE
// let output = (function (berat, tinggi) { 
//     let bmi = berat / (tinggi * tinggi);
//     return "BMI anda adalah: " + bmi;
// })(45, 1.6);
// console.log(output);

// 2. Callback Function
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    return callback(bmi);
}

let output = hitungBMI(45, 1.6, function(bmi) {
    return "BMI Anda adalah: " + bmi;
});

console.log(output);
