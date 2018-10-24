// Write a function that checks if the two arrays are equal.

function checksArray(firstArray, secondArray) {
  var result;
  for (var i = 0; i < firstArray.length; i++) {
    // console.log(firstArray[i], secondArray[i]);

    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}
console.log(checksArray([1, 2, 3], [1, 2, 3]));
