'use strict';

const checkForSpam = function(message) {
  let lowerMessage = message.toLowerCase();
  let stringToArray = lowerMessage.split(' ');

  for (let i = 0; i < stringToArray.length; i += 1) {

    if(stringToArray[i].includes('spam') || stringToArray[i].includes('sale')) {
      return true;
     }
  }

  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));