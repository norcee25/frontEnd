//Name : Tanaty, Norce Shoudick
//Front-End
// exercise #1
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// // 1. Menggunakan for-loop, iterate dan console.log semua orang
// for (let i = 0; i < people.length; i++) {
// console.log(people[i]);
// }

// // 2. Menggunakan forEach(), untuk iterate dan console.log semua orang
// people.forEach((person) => {
// console.log(person);
// });

// // 3.menghapus "Greg" dari array.
// people.shift("Greg");
// console.log(people);

// // 4.menghapus "James" dari array.
// people.pop("James");
// console.log(people);

// // 5.menambahkan "Matt" ke depan atau diawal array.
// people.unshift("Matt");
// console.log(people);

// // 6.menambahkan namamu ke akhir array.
// people.push("Norce Tanaty");
// console.log(people);

// // 7. menggunakan for-loop dan keluar setelah console.log "Mary"
// for (let i = 0; i < people.length; i++) {
// console.log(people[i]);
// if (people[i] === "Mary") {
// console.log("loop berhenti di mery");
// break;
// }
// }

// // 8.menampilkan tanpa marry dan matt
// let copy = people.slice(2);
// console.log(copy);

// // 9. menambahkan elizabethh dan artie
// people.splice(2, 1, "Elizabeth", "Artie");// Remove "Devon", add "Elizaveth" and "Artie"
// console.log(people);

// // 10.menambahkan bob
// let withBob = people.concat("Bob");
// console.log(withBob);

// //exercises #2
// let programming = {
// languages: ["JavaScript", "Python", "Ruby"],
// isChallenging: true,
// isRewarding: true,
// difficulty: 8,
// jokes:
// "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke&quot;,
// };

// Tambahkan bahasa "Go" ke akhir array languages
programming.languages.push("Go");
console.log(programming.languages);

// Gunakan bracket notation untuk mengubah difficulty menjadi 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

// Hapus kunci jokes dari objek programming menggunakan delete
delete programming.jokes;
console.log(programming);

// Tambahkan kunci baru isFun dengan nilai true menggunakan dot notation
programming.isFun = true;
console.log(programming);
// Gunakan map() untuk mengiterasi languages array dan update tiap elemen dengan format "0 - JavaScript ..."
programming.languages.map((language, index) => {
console.log(`${index} - ${language}`);
});