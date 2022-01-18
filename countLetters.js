const assertEqual = require(.../assertEqual)

const countLetters = (sentence) => {

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

module.exports = countLetters;

// console.log(countLetters("string is string"))