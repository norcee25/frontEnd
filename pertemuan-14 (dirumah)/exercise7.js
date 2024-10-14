// 1. Destructuring (Array & Object)
// a. Array
let buah = ["mangga", "pisang", "anggur"];
let [buah1, buah2, buah3] = buah;

console.log(buah1); // mangga
console.log(buah2); // pisang
console.log(buah3); // anggur

// b. Object
// let orang = {
//     nama: "John",
//     umur: 30,
//     sudahMenikah: false
//   };
  
//   let { nama, umur, sudahMenikah } = orang;
  
//   console.log(nama); // John
//   console.log(umur); // 30
//   console.log(sudahMenikah); // false

  // 2. Destructuring dengan Mengambil Sebagian Item (Array & Object)
  // a. Array
  let angka = [1, 2, 3, 4, 5];
  let [angka1, , angka3] = angka; // Mengambil angka pertama dan ketiga
  
  console.log(angka1); // 1
  console.log(angka3); // 3
  
  // b. Oject
  let mobil = {
    merek: "Toyota",
    model: "Camry",
    tahun: 2020
  };
  
  let { merek, tahun } = mobil; // Mengambil merek dan tahun
  
  console.log(merek); // Toyota
  console.log(tahun); // 2020

//3. Destructuring dengan Menggunakan Default Value (Array & Object)
// a. Array
let warna = ["merah", "hijau"];
let [warna1, warna2, warna3 = "biru"] = warna; // warna3 memiliki default value

console.log(warna1); // merah
console.log(warna2); // hijau
console.log(warna3); // biru

// b. Oject
let siswa = {
    nama: "Ani",
    umur: 20
  };
  
  let { nama, umur, kelas = "Tidak Diketahui" } = siswa; // kelas memiliki default value
  
  console.log(nama); // Ani
  console.log(umur); // 20
  console.log(kelas); // Tidak Diketahui

// 4. Destructuring dengan Menggunakan Rest Operator (Array & Object)
// a. Array
let angkaArray = [1, 2, 3, 4, 5];
let [angkaPertama, ...angkaLainnya] = angkaArray; // Mengambil angka pertama dan sisanya

console.log(angkaPertama); // 1
console.log(angkaLainnya); // [2, 3, 4, 5]

// b. Object 
let buku = {
    judul: "Belajar JavaScript",
    penulis: "Budi",
    tahun: 2021
  };
  
  let { judul, ...infoLainnya } = buku; // Mengambil judul dan sisanya
  
  console.log(judul); // Belajar JavaScript
  console.log(infoLainnya); //{ penulis: 'Budi', tahun: 2021 }


//Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.
// 1. destructuring untuk parameter fungsi dan default parameter
const calculateAge = (birthYear) => 2019 - birthYear; // Memperbaiki fungsi untuk menghitung umur

const yearUntilRetirement = ({ year = 1980, firstName = "John Doe" } = {}) => { // Destructuring dan default parameter
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName}, retires in ${retirement} years.`);
    } else {
        console.log(`Halo nama saya ${firstName}, saya sudah pensiun.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// addNumber sudah menggunakan ES6 dengan rest parameter dan arrow function
// calculateArea sudah menggunkan destructuring dan arrow function
// makeAjaxRequest sudah menggunakan default parameter