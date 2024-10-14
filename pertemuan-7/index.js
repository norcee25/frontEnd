// Array in JavaSript

// Deklarasi Array
// Cara 1. Array Literal
// let numbers = [ 1, 2, 3, 4, 5];
// console.log(numbers);
// //Cara 2. Kata kunci new
// let numbers2 = new Array (6, 7, 8, 9, 10); 
// console.log(numbers2);

//Tipe data yang bisa disimpan dalam Array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //string
// let john = [ "john", 30, true, [80, 90,100]]; //mix
// console.log(john);

// //array length
// console.log(numbers.length); //5
// console.log(students.length); //3
// console.log(john.length); //4

// //Cara mengakses elemen / data tertentu dalam array 
// //melalui index array. Index selalu dimulai dari 0
// console.log(numbers[2]); //3
// console.log(students[1]); //Jane
// console.log(john[2]); //true
// console.log(john[3][1]); //90

// //Mengakses element/ data terakhir dalam aray
// let numbers2 = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers2[numbers2.length-1]);//10
// console.log(numbers2[numbers2.length/2-1]); //cari yang ditengah

//Array Method
let array = [1,2,3,"hello", false, true];
console.log(array);
//1. toString ()
console.log(array.toString());
//2. join ()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));
//3. pop()
array.pop(); //hapus index terakhir
console.log(array)
//4. push()
array.push("Selamat Pagi"); //tambah index terakhir
console.log(array);
//5. shift() //index 0 dihapus elemen pertama
array.shift()
console.log(array)
// 6. unshift
array.unshift("Selamat Pagi")
console.log(array);
//7. splice
array.splice(2, 1); //hapus index, jumlah
console.log(array);
array.splice(1, 1, 1) //hapus dulu baru ganti (index 1, hapus 1 array, ganti 1)
console.log(array);
array.splice(2, 0, 2, 3)//tambah 2 dn 3 (index 2, tidak ada yang dihapus, ditambah 2 dan 3)
console.log(array)
//8. concat()
let buah=["pisang","apel", "jeruk"];
let sayur=["tomat","bayam","wortel"];
let biji=["kedelai","kacang tanah","kacang polong"];

let makanan = buah.concat(sayur,biji);
console.log(makanan);
//9. slice()
let sayuran = makanan.slice(3, 6); //elemen awal dan akhir, yang terakhir tidak diikut sertakan
console.log(sayuran);
let bijian = makanan.slice(6); // potong dri 6 sampai habis
console.log(bijian);