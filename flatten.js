const flatten = function (array) {
  let newArray = [];
  array.forEach(function (element) {
    if (Array.isArray(element)) {
      element.forEach(function (element2) {
        newArray.push(element2);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

module.exports = flatten;
