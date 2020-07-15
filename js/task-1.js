'use strict';

const logItems = function(array) {

  for(let i = 0; i < array.length; i += 1) {
    console.log(`${array.indexOf(array[i]) + 1} - ${array[i]}`)
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);