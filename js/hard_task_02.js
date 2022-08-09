'use strict';

const num1 = +prompt('Введите первое число');
const num2 = +prompt('Введите второе число');

const getMinNumber = (num1, num2) => {
  // let minNumber = (num1 < num2) ? num1 : num2;
  // let minNumber = ((num1 + num2) - Math.abs(num1 - num2)) / 2;
  
  let minNumber = (num1 > num2) * num2 + (num2 > num1) * num1;
  return minNumber;
}

const result = getMinNumber(num1, num2);

console.log(`Число ${result} меньше`);
