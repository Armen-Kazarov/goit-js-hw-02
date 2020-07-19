'use strict';

let message;
let input;
const numbers = [];

function arrayNumbersSum(numbers) {
  let total = 0;

  do {
    message = prompt('Please, enter some number');
    input = Number(message);
    numbers.push(input);
    total += Number(input);

  } while (Number(input));

  if(message === null && numbers.length !== 0) {
    alert(`Общая сумма чисел равна ${total}`);
  }
}
arrayNumbersSum(numbers);