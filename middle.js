const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual");

const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    let formulaOdd = Math.floor(arr.length / 2);
    console.log(arr[formulaOdd]);
    return arr[formulaOdd];
  } else {
    let formulaEven = (arr.length / 2);
    console.log(arr[formulaEven - 1], arr[formulaEven]);
    return arr[formulaEven];
  }
};

module.export = middle;

// Test Code
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5])

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6])