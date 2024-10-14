// Menghitung BMI (Body Mass Index)
//CARA 1
// function hitungBMI(berat, tinggi) {
//     // Menghitung BMI dengan rumus: berat / (tinggi * tinggi)
//     let bmi = berat / (tinggi * tinggi);
//     return bmi;
//   }
  
//   let berat = 45; // berat dalam kg
//   let tinggi = 1.6; // tinggi dalam meter
  
//   let bmi = hitungBMI(berat, tinggi);
//   console.log("BMI = " + bmi.toFixed(2));


//CARA 2

// //                parameter
function hitungBMI(berat, tinggi) {
    // Menghitung BMI dengan rumus: berat / (tinggi * tinggi)
    let bmi = berat / (tinggi * tinggi);
    return "BMI Anda adalah: " + bmi.toFixed(2);
}

//                     argument
let output = hitungBMI(45, 1.6);
console.log(output);