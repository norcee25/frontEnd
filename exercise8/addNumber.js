const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
  
    numbers.forEach((number) => {
      sum += number;
    });
  
    return sum;
  };
  
  export default addNumber;
  