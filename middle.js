const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual");

const middle = (arr) => {
  const newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    let formulaOdd = Math.floor(arr.length / 2);
    newArray.push(arr[formulaOdd])
    return newArray;
  } else {
    let formulaEven = (arr.length / 2);
    newArray.push(arr[formulaEven - 1]) 
    newArray.push(arr[formulaEven])
    return newArray;
  }
};

module.exports = middle;

// Test Code
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5])

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6])