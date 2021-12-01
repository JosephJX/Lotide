const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
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

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5])

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6])