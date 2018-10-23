/*
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

function removeDuplicates(array) {
  var newArray = array.sort(function(a, b) {
    return a - b;
  });
  var result = [];
  var theSameElement;

  for (var i = 0; i < newArray.length; i++) {
    var counter = 0;
    for (var j = 0; j < result.length; j++) {
      if (newArray[i] === result[j]) {
        // theSameElement = newArray[i];
        // result.push(theSameElement);
        counter++;
      }
    }
    if (counter == 0) {
      result.push(newArray[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
