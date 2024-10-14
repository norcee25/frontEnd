//1
import { yearUntilRetirement } from './retirement.js';

yearUntilRetirement({ year: 1987, firstName: "John" });

//2
import addNumber from './addNumber.js';

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3
import { calculateAreaFunc } from './areaCalculator.js';

const areas = calculateAreaFunc([21, 7]);

console.log(`Area with 21 radius: ${areas[0]}, and area with 7 radius: ${areas[1]}`);

//4
import makeAjaxRequest from './ajaxRequest.js';

// Memanggil fungsi dengan URL
makeAjaxRequest("www.google.com");

