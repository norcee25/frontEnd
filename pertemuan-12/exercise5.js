//Ubahlah syntax ES5 berikut ke dalam ES6

//1
const calculateAge = (birthYear) => `Tahun lahir saya ${2019}`;

const yearUntilRetirement = (year, firstName) => {
    if (!year) {
        year = 1980;  // Default value jika `year` tidak diberikan
    }
    if (!firstName) {
        firstName = "John Doe";  // Default value jika `firstName` tidak diberikan
    }

    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(` ${firstName}, retires in ${retirement} years.`);
    } else {
        console.log(`Halo nama saya ${firstName}, saya sudah pensiun.`);
    }
};
yearUntilRetirement({ year: 1987, firstName: 'John' });

//2.
const addNumber = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
  };
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let area21 = calculateArea({ radius: 21, power: 2 });
let area7 = calculateArea({ radius: 7, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  makeAjaxRequest('www.google.com');
  