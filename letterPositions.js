const assertArraysEqual = require('./assertArraysEqual')

const eqArrays = require('./eqArrays')

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    //   console.log(sentence[i])
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i)
      // results[sentence[i]] = [i]
    }

  }
  // position of each letter is being given to use by the variable i // 

  //  if (results(sentence[i]) !== undefined) {
  //    results[sentence[i]].push(i);
  console.log(results)
  return results

};

module.exports = letterPositions;


// return results; 

// letterPositions("this is test")
/*


expected result

{t: [0, 8, 11]
h: [1]
i:
s:
e:
}


// */
// assertArraysEqual(letterPositions("hello").e, [1]);