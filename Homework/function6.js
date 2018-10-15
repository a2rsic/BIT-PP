
// // 1.Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 


function findNumOfVowels(string) {
    var numbersOfVowels = 0;
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "O":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":

                numbersOfVowels++;
                break;
        }
    }
    return numbersOfVowels;
}
console.log(findNumOfVowels("Ana Voli MilovanA"));







// 2.Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]



function combinesTwoArray(firstArr, secondArr) {
    var newArray = [];

    for (var i = 0; i < firstArr.length && i < secondArr.length; i++) {
        newArray[newArray.length] = firstArr[i];
        newArray[newArray.length] = secondArr[i];
    }
    return newArray;
}
console.log(combinesTwoArray(["a", "b", "c"], [1, 2, 3]));




// 3.Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateElements(array, number) {
    var arrayNew = [];
    for (var i = number; i < array.length; i++) {
        arrayNew[arrayNew.length] = array[i];

    }
    for (var j = 0; j < number; j++) {
        arrayNew[arrayNew.length] = array[j];
    }
    return arrayNew;
}
console.log(rotateElements([1, 2, 3, 4, 5], 2));




// 4.Write a function that takes a number and returns array of its digits.

function arrayOfDigits(number) {
    var newArr = [];
    numberToString = number + ""
    for (var i = 0; i < numberToString.length; i++) {
        newArr[newArr.length] = numberToString[i];
    }
    return newArr;
}
console.log(arrayOfDigits(45673));




// 9.Write a function to find the median element of array

function findMedianElement(array) {
    var medianElement;
    for (var i = 0; i < array.length/2; i++) {
        medianElement = array.length[i];


        for (var j = array.length; j >= i; j--) {
            medianElement = array[j];
        }
    }
    return medianElement;
}
console.log(findMedianElement([1, 2, 5, 3, 4, 5, 6]));


