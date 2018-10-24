// 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// function insert(str, ins, n) {
//   var newStr = "";
//   for (var i = 0; i < str.length; i++) {
//     if (i != n) {
//       newStr += str[i];
//     } else {
//       for (var j = 0; j < ins.length; j++) {
//         newStr += ins[j];
//       }
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(insert("My random string", "JS ", 10));

// 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// function newArray(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (
//       arr[i] / arr[i] === 1 ||
//       arr[i] === 0 ||
//       arr[i] === false ||
//       arr[i] === true
//     ) {
//       newArr[newArr.length] = arr[i];
//     }
//   }
//   console.log(newArr);
// }

// newArray([NaN, 0, 15, false, -22, "", undefined, 47, null]);

function newArray(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != undefined && arr[i] != null && isFinite(arr[i])) {
      string += arr[i];
    }
  }
  return string;
}

var result = newArray([
  NaN,
  0,
  15,
  false,
  -22,
  "",
  undefined,
  47,
  null,
  Infinity
]);
console.log(result);
