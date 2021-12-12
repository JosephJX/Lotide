// const assertEqual = require("../assertEqual")

// const eqArrays = require("../eqArrays")

// const tail = require("../tail")

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// console.log(result);
// const assertEqual = require("../assertEqual")
const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3);
// assertEqual(tail(words).length, 2);
// assertEqual(tail(words).length, 2)


describe("#tail", () => {

it("returns 3 for [1, 2, 3]", () => {
 
  assert.strictEqual(tail([1, 2, 3]), 3);
});

});
;