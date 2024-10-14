// axios.js
import axios from './axios.min.js'; // Pastikan axios sudah diimpor

const ambilDataUser = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        const users = response.data.data;

        // Mencetak first_name dan last_name dari setiap user
        users.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};

// Ekspor fungsi ambilDataUser
export { ambilDataUser };
