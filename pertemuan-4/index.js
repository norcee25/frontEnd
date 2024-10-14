//Variabel & Operators

//1. JavaScript Variabel
// let fullName = "John Doe"; //Camel Case
// let full_name = "John Doe"; //Snake Case
// let FullName = "John Doe"; //Pascal Case

// const gender ="male"; //string
// // gender = "female"; //error
// let age = "30"; //number integer
// age = 31;
// let weight = "85.5"; //number float
// let isMarried = true //boolean
// let grade = null; //null
// let address; //Undifined

// console.log(typeof fullName);
// console.log(gender);
// console.log(age);
// console.log(isMarried);
// console.log(grade);
// console.log(address);

// 2. JavaScript Operators
// a. Arithmetic Operators (+,-,*,/,%,**)
// let bil1 = 20;
// let bil2 =5;

// console.log(bil1 + bil2); //25
// console.log(bil1 - bil2); //
// console.log(bil1 * bil2);
// console.log(bil1 / bil2);
// console.log(bil1 % bil2);
// console.log(bil1 ** bil2)

// let alas = 5;
// let tinggi = 5;
// let luas = 0.5 * alas * tinggi;
// console.log(luas);

//b. Assignment Operator (=, +=, -+, )
// let bilangan = 10;
// Bilangan = bilangan + 10;
// bilangan += 10;
// console.log(bilangan);
// console.log(Bilangan);

//c. String Operator (+)

// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//d. Relational Operator (==, ===, > , <, >=, <=)
// let bil1 = 10;
// let bil2 = 10;
// let bil3 = "10";
// let bil4 = 5;

// console.log(bil1 = bil2); //true
// console.log(bil1 === bil2); //true
// console.log(bil1 == bil3); //true
// console.log(bil1 === bil3); //false, karena === lebih strict, tipe data di cek
// console.log(bil1 > bil4); //true
// console.log(bil1 < bil4); //false

//e. Ternary Operator (? :)
// let age = 17;
// let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP";
// console.log(isEligible);

//f. Logical Operator (&&, ||, !)
// AND (&&)
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //true
// //OR (||)
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false
// //NOT(!)
// console.log(!true); //false
// console.log(!false); //true