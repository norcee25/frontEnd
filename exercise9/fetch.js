// fetch.js
const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then(response => {
            return response.json(); // Mengembalikan response dalam format JSON
        })
        .then(users => {
            // Mencetak first_name dan last_name dari setiap user
            users.data.forEach(user => {
                console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
            });
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
};

// Ekspor fungsi ambilDataUser
export { ambilDataUser };
