const assertEqual = require("../assertEqual")

const eqArrays = require("../eqArrays")

const tail = require("../tail")

const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(result);

assertEqual(eqArrays(result, ["Lighthouse", "Labs"]), true);