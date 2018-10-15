//1. Write a program that calculates the maximum of two given numbers. 

function max_num(a, b) {
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}
var res = max_num(15, 6);
console.log(res);

//2. Write a program that checks if a given number is odd.

function odd_num(a) {
    var res;
    if (a % 2 == 0) {
        res = "no, its not odd";

    } else {
        res = "its odd";
    }
    return res
}
var odd = odd_num(20);
console.log(odd);


// 3.Write a program that checks if a given number is a three digit long number.

function long_digit(a) {
    var digit;
    if (a.lenght == 3) {
        digit = "its three digit long";
    } else {
        digit = "number is not long"
    }
}
var long = long_digit(546);
console.log(long);




// 4.Write a program that calculates an arithmetic mean of four numbers.

function arithmetic(a, b, c, d) {
    var result;

    result = (a + b + c + d) / (a, b, c, d);
    return result;
    // console.log(res);
}
console.log(arithmetic(12, 12, 3, 2));




// Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****
// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *


//5. Write a program that calculates a number of digits of a given number. 


function numOfDigits(num) {


}
console.log(numOfDigits(4567));
    







// 6.Write a program that calculates a number of appearances of a given number in a given array.
// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;
// result: 3

// 7.Write a program that calculates the sum of odd elements of a given array. 

function odd_elements(ar) {
    var sum;
    for (var i = 0; i <= ar.lenght; i++) {
        if ( ar % 2 == 1) {
            sum =  
        } else {}
    } 
    console.log(arr);
}
odd_elements([13, 7, 5, 2, 4]);












// 8.Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.


// 9.Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


function cancatenates(a, n) {
    var res;

    res = a *
}








































