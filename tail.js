const assertEqual = require("./assertEqual")
const eqArrays = require("./eqArrays")

const tail = (arr) => {
  return arr[arr.length - 1];
};

module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// console.log(result);

// assertEqual(eqArrays(result, ["Lighthouse", "Labs"]), true);