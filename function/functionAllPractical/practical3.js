// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function falsy(a) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      // TODO: korak po korak
      arr[arr.length] = a[i];
    }
  }
  console.log(arr);
}

falsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);

// 4.Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverses_num(a) {
  var string = a + "";
  var s = "";

  for (var i = string.length - 1; i >= 0; i--) {
    s += string[i];
  }
  console.log(parseInt(s));
}
reverses_num(12345);

// 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function lastElement(arr, n) {
  if (n == undefined) {
    n = 1;
  }

  var arr2 = [];

  for (var i = arr.length - n; i < arr.length; i++) {
    arr2[arr2.length] = arr[i];
  }
  console.log(arr2);
}

lastElement([7, 9, 0, -2], 2);

//6. Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function numArr(num, value) {
  var arr = [];

  if (value == undefined) {
    value = null;
  }

  for (var i = 0; i < num; i++) {
    arr[i] = value;
  }

  console.log(arr);
}

numArr(2, "none");

// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
