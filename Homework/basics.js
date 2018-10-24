//1. Write a function that prints all numbers between two provided numbers. 

function printsNumbers(number1, number2) {
    var result;
    for (var i = number1; i <= number2; i++) {
        console.log(i);
    }
}
printsNumbers(2, 5);






//2. Write a function that checks if the number is positive or negative.

    function isPositive(number) {
        var result;
        if(number > 0) {
            return true;
        } else {
            return false
        }
    }
    console.log(isPositive(2));





// 3.Write a function that outputs array of every second character  from the provided string.
//  In case that string is not provided outputs array empty array.

    function outputsArrOfSecondChar(string) {
        var newString = "";
        for (var i = 0; i < string.length; i += 2) {
            newString += string[i]
        }
        return newString;
    }
    console.log(outputsArrOfSecondChar("Ponedeljak"));




//4.Write a function that checks if the first and the last element in the array or string are the same.

    function  checkFirsAndLastElement(array) {
        var result;
        for (var i = 0; i < array.length; i++) {
            firstElement = array[i];
            lastElement = array[array.length -1];
            if(firstElement == lastElement) {
                return true;
            } else {
                return false;
            }
        }
        
    }
    console.log(checkFirsAndLastElement([2, 3, 5, 3]));



//5. Write a function that checks if the two arrays are equal.

    function checksTwoArrays(array1, array2) {
        var result;
        for (var i = 0; i < array1.length; i++) {
            var firstElement = array1[i];
            var secondElement = array2[i];
            if(firstElement !== secondElement) {
                return false;
            } else {
                return true;
            }
        }
    }
    console.log(checksTwoArrays([1, 5, 3], [1, 2, 3]));

// Write a function that reverses a word or sentence. Cover cases if sentence is not provided

// Write a function that prints out number of input arguments of the function.

// Write a function that sets some global variable to the new value.

// Write a function that replaces all white spaces with dash (-)

// Write objects representing a book, an animal, a person.

