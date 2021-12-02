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

const middle = (arr) => {
  if (arr.length % 2 !== 0) {
    var formulaOdd = Math.floor(arr.length / 2)
    console.log(arr[formulaOdd])
    return arr[formulaOdd]
  } else  {
    var formulaEven = (arr.length / 2 )
    console.log(arr[formulaEven - 1], arr[formulaEven])
    return arr[formulaEven]

  }
};

// Test Code
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5])

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6])