// Asynchronous JS

//Synchronous -> Single thread,  berjalan secara sinkron berurutan per baris, dieksekusi waktu itu juga no delay
// hanya satu jalur antrian hingga bisa menimbulkan (blocking)
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses yang memakan waktu lama");
// console.log("proses 4");

//Asynchronous -> multi thread -> non-block
//1. Parallel
// setTimeout(()=>{
//     console.log("proses 1");
// }, 3000); //muncul setelash 3 detik
// console.log("Proses 2");
// setTimeout(()=>{
//     console.log("proses 3");
// }, 5000); //muncul setelah 5 detik
// console.log("Proses 4");

//2. Concurent , pas di dunia frontEnd
// setTimeout(()=>{
//     console.log("proses 1");
//     setTimeout(()=>{
//         console.log("proses 2");
//         setTimeout(()=>{
//             console.log("proses 3");
//             setTimeout(()=>{
//                 console.log("proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);



//Promise
let condition = true
const newPromise = new Promise((resolve, reject)=>{
    if (condition) {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

//Cara pakai Promise
//1. then - catch
// newPromise.then((result)=> console.log(result));
// newPromise.then((resul2t)=> console.log(result2));
// newPromise.catch((error)=> console.log(error));

//2. Async - Await
// harus dibuat dalam fungsi
// const consumePromise =async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// consumePromise ();

//Pakai Promise yang sudah ada
//1. fetch
fetch('https://jsonplaceholder.typicode.com/todos/1/users')
      .then(response => response.json())
      .then(json => console.log(json))

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   json.forEach((b{ name }) => console.log(name));
// })();

//2. Axios
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((result) => console.log(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    result.data.forEach(({ name }) => console.log(name));
  })();