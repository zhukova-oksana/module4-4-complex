'use strict';

const nod = (num1, num2) => num1 !== 0 ? nod(num2 % num1, num1) : num2;

console.log( nod(21, 14) );
