const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Human Action", "Maps of Meaning", "Civilization and its Discontents", "Evolutionary Psychology"];
const words3 = ["I", "am", "the", "next", "Phil Knight + Steve Jobs"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

module.exports = map;
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(words2, word => word[0]), [ 'H', 'M', 'C', 'E']);
// assertArraysEqual(map(words3, word => word[0]), [ 'I', 'a', 't', 'n', 'P']);

