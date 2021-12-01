const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};
// iterate over array
const findKeyByValue = (object, value) => {
 const keys = Object.keys(object)
    for (const key of keys) {
      if (value === object[key]) {
        return key;
      }
    }
    return undefined;
}
// iterate over object
// const findKeyByValue = (object, value) => {
//   for (const key in object) {
//     if (value === object[key]) {
//       console.log(key)
//       return key; 
//     } 
//   }
//   return undefined; 
// }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
