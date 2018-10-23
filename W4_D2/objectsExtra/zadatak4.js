/*
Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/
function findSmallestElement(array) {
  var minValue = Math.min(...array);
  var indexMinValue = array.indexOf(minValue);

  var newObject = new Object();
  newObject.minValue = minValue;
  newObject.minLastIndex = indexMinValue;

  return newObject;
}

console.log(findSmallestElement([1, 4, -2, 11, 8, 1, -2, 3]));
