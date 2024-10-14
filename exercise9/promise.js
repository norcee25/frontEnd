// promise.js
const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
};

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg); // Akan mencetak "Hello World!" setelah 2 detik
};

// Ekspor fungsi messages
export { messages };
