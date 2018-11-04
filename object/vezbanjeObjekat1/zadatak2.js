// Write a JavaScript function that reverses a number. 
// typeof result of the function should be “number”.
/*
// 	12345 -> 54321
var num = 34567;
var s = new String(num);
s.split("");
s.split("").reverse()

*/






// 

function reverseNumber(number) {
    number += "";
    return number.split("").reverse().join("");
}
var num = 12345;
console.log(reverseNumber(num));

console.log(typeof num);