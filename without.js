const assertArraysEqual = require('./assertArraysEqual')

const eqArrays = require('./eqArrays')

const without = (source, itemsToRemove) => {
  let newArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;

};

module.exports = without;


// !arr1.includes(item)
// assertArraysEqual(without([1, 2, 3], [2, 3]), [1]);

// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

