'use strict';

const getMinNumber = (num1, num2) => {
  let minNumber = (num1 < num2) ? num1 : num2;
  return minNumber;
}

console.log(getMinNumber(10, 5));
