/*
a. Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]

        */

function arrayLessThanElement(array, number) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < number) {
      result.push(element);
    }
  }
  return result;
}
console.log(arrayLessThanElement([2, 3, 8, -2, 11, 4], 6));

/*
b.Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]
*/
function findsElements(array) {
  var result = [];

  for (var j = 0; j < array.length; j++) {
    if (array[j].indexOf("pro") == 0 || array[j].indexOf("Pro") == 0) {
      result.push(array[j]);
    }
  }
  return result;
}
console.log(findsElements(["JavaScript", "Programming", "fun", "product"]));

/*
c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
*/
