// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

function vowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;

      default:
        break;
    }
  }
  return count;
}
console.log(vowels("ana voli milovana"));

// Modify

var vowels = function(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;

      default:
        break;
    }
  }
  return count;
};
console.log(vowels("ana voli milovana"));

// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var combinesTwoArray = function(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }
  return newArr;
};

console.log(combinesTwoArray(["a", "b", "c"], [1, 2, 3]));

// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var rotatesList = function(array, num) {
  var newArr = [];
  var counter = 0;
  for (var i = num; i < array.length; i++) {
    newArr[counter] = array[i];
    counter++;
  }
  for (var j = 0; j < num; j++) {
    newArr[counter] = array[j];
    counter++;
  }
  return newArr;
};
console.log(rotatesList([1, 2, 3, 4, 5, 6], 3));

// Write a function that takes a number and returns array of its digits.

var returnsArray = function(number) {
  var numberString = number + "";
  var arrayNew = [];
  var counter = 0;
  for (var i = 0; i < numberString.length; i++) {
    arrayNew[counter] = numberString[i];
    counter++;
  }
  return arrayNew;
};
console.log(returnsArray(1254));

// Write a program that prints a multiplication table for numbers up to 12.

var multiplicationTable = function(num) {
  var table = "";

  for (var i = 1; i <= num; i++) {
    table += "\n";
    for (var j = 1; j <= num; j++) {
      table += i * j + "\t";
    }
  }
  return table;
};

console.log(multiplicationTable(10));

// Write a function to input temperature in Centigrade and convert to Fahrenheit.

var convertToF = function(celsius) {
  return (celsius * 9) / 5 + 32;
};

console.log(convertToF(20));

// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

var findMaxNum = function(arr) {
  var newArr = [];

  var i;
  for (i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      newArr[newArr.length] = parseFloat(arr[i]);
    }
  }
  var max = newArr[0];
  for (var j = 0; j < newArr.length; j++) {
    if (max < newArr[j]) {
      max = newArr[j];
    }
  }

  return max;
};

console.log(findMaxNum(["1", "21", undefined, "42", "1e+3", Infinity]));

// Write a function to find the maximum and minimum elements. Function returns an array.

var findMaxMin = function(array) {
  var newArr = [];
  var max = array[0];
  var min = array[0];

  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  newArr[0] = min;
  newArr[1] = max;
  return newArr;
};
console.log(findMaxMin([1, 2, 4, 50, 10, 29]));

// Write a function to find the median element of array.

// Write a function to find the element that occurs most frequently.

// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

// Write a function to find all the numbers greater than the average.

// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var bodyMassIndex = function(weight, height) {
  var bmi = weight / (height * height);

  var result = "";

  if (bmi < 15) {
    result = "Starvation";
  } else if (bmi >= 15 && bmi < 17.5) {
    result = "Anorexic";
  } else if (bmi >= 17.5 && bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  } else if (bmi >= 30 && bmi < 40) {
    result = "Obese";
  } else if (bmi >= 40) {
    result = "Morbidly obese";
  }

  return result;
};

console.log(bodyMassIndex(80, 1.8));

// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
