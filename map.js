const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

};
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑  Assertion failed: ${arr1} !== ${arr2}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Human Action", "Maps of Meaning", "Civilization and its Discontents", "Evolutionary Psychology"];
const words3 = ["I", "am", "the", "next", "Phil Knight + Steve Jobs"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words2, word => word[0]), [ 'H', 'M', 'C', 'E']);
assertArraysEqual(map(words3, word => word[0]), [ 'I', 'a', 't', 'n', 'P']);

