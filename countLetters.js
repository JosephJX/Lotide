const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
}; 

const countLetters = function (sentence) {
  
  let result = {};
  sentence = sentence.replace(/\s/g, "")
  for (letter of sentence) {
    if (result[letter]) {
      result[letter]++
    } else {
      result[letter] = 1
    }
  }


  return result;
}

console.log(countLetters("string is string"))