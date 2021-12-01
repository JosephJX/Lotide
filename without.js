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
  }

};

const without = (source, itemsToRemove) => {
  let newArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
 return newArray;

};

assertArraysEqual(without([1, 2, 3], [2, 3]), [1]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

