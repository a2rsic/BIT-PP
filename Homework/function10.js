// IIFE = Immediately Invoked Function Expressions

//1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

var replaceFirstAndLastEl;
replaceFirstAndLastEl = (function(array) {
    var tmp;
    
    tmp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = tmp;
    
    

    return array;

}) ([4, 5, 11, 9]);
console.log(replaceFirstAndLastEl);






// 2.Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 

var calculates;
calculates = (function(a, b){
    return a * b;

}) (4, 5);
console.log(calculates);





 
// 3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

var replaceLetters;
replaceLetters = (function(string){
   var newstring = "";
   var counter = 0;
   for (var i = 0; i < string.length; i++ ) {
       if(string[i] == "M" || string[i] == "m"){
           newstring += "*";
           counter++;
       } else {
           newstring += string[i];
       }
   }
   return newstring + "," + counter;
    

}) ("programMing");
console.log(replaceLetters);




// 4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com


function emailForm() {
    var email = "";
    function emailInput(name, surname) {
        email +=  name + "." + surname + "@gmail.com";
        return email;
        
    }

    return emailInput;
}
var output = emailForm();
console.log(output("ana", "arsic"));



// 5.Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28


function calculates() {
    var decimal;
    function decimalValue(number) {
        
    }
}







// 6.Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 



function findOddElements(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {

            newArray[i] = array[i];
        }
    }
    return newArray;
}
console.log(findOddElements([2, 8, 11, 4, 9, 3]));
