// Write a function that outputs array of every second character  from the provided string.
// In case that string is not provided outputs array empty array.

function outputsArray(string) {
  var newArray = [];
  var counter = 0;
  for (var i = 0; i < string.length; i += 2) {
    newArray[counter] = string[i]
    counter++
  }
  return newArray;
}
console.log(outputsArray("marko"));
