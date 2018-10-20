
// Write a function that checks if the number is positive or negative.

function isNegative (number) {
    var result;
    if (number >= 0) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

// console.log(isNegative(-5));


// second case

// if (isNegative(1)) {
//     console.log("Negtivan");
// } else {
//     console.log("Posivan");
// }

var arr = [-1, 5, 6, -5, 8]

function printPositiveNums(arr) {
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        
        var isPositive = !isNegative(num)

        if (isPositive) {
            console.log(num);
        }
    }
}

printPositiveNums(arr);