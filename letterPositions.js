const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑  Assertion failed: ${arr1} !== ${arr2}`);
  }
};

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
  };

}

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


// return results; 

letterPositions("this is test")
/*


expected result

{t: [0, 8, 11]
h: [1]
i:
s:
e:
}


// */
assertArraysEqual(letterPositions("hello").e, [1]);