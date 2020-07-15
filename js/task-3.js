'use strict';

const findLongestWord = function(string) {
  const stringToArray = string.split(' ');
  let longestWord = '';

  for(let i = 0; i < stringToArray.length; i += 1) {

    if(stringToArray[i].length > longestWord.length) {
      longestWord = stringToArray[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));