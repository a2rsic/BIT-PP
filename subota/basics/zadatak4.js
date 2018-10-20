// Write a function that checks if the first and the last element in the array or string are the same.

function checkFirstAndLast(array) {
  var output;

  var firstElement = array[0];
  var lastElement = array[array.length - 1];

  // if (array[0] != array[array.length - 1]) {
  if (firstElement !== lastElement) {
    output = "Elements aren't equal";
  } else {
    output = "Elements are equal";
  }
  return output;
}
console.log(checkFirstAndLast([2, 3, 4, 5, 3]));
