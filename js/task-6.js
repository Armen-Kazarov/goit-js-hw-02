'use strict';

let message = prompt('Please, enter some number');
let input;
const numbers = [];

function arrayNumbersSum(numbers) {

  for (let i = 0; i += 1;) {
    input = Number(message);
    numbers.push(input);
    let total = 0;

    for (let j = 0; j < numbers.length; j++) {
      total += numbers[j];
      }

    message = prompt('Please, enter some number');

    if(message === null && numbers.length !== 0) {
      alert(`Общая сумма чисел равна ${total}`); break;
    }
  }
}
arrayNumbersSum(numbers);