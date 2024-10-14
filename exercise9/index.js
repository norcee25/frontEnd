// index.js
import { messages } from './promise.js';
import { ambilDataUser } from './fetch.js';
import { ambilDataUserAsync } from './asyncAwait.js';
import { ambilDataUser as ambilDataUserAxios } from './axios.js';

// Memanggil fungsi-fungsi yang diimpor
messages(); // Memanggil fungsi dari promise.js
ambilDataUser(); // Memanggil fungsi dari fetch.js
ambilDataUserAsync(); // Memanggil fungsi dari asyncAwait.js
ambilDataUserAxios(); // Memanggil fungsi dari axios.js
