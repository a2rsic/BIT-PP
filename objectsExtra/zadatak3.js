/*
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
*/
/*a*/
function checkOddNumber(array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (element % 2 != 0) {
      result = true;
    }
  }
  return result;
}
console.log(checkOddNumber([10, 2, 8, 2, 10]));

/*b
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function countsMiddleElement(array) {
  var result;
  result = Math.round(array.length / 2);
  return result;
}
console.log(countsMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
