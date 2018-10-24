//1. Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
// 'ff', 16, 8 -> 377

    function convertNumber(number, radix){
        var num = number.split(" ");
        radix = 
        return num;
    }
    console.log(convertNumber("ff", 16));


// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

    function reversesNumbert(number){
        var newNumber = "";
        newNumber += number;
        newNumber.split(" ").reverse().join(" ");
        return newNumber;
    }
    console.log(reversesNumbert(12345));

// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."
