
// 1.Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var duplicates = function(array){
    var newArray = array.split(" ");

    for(var i = 0; i < array.length; i++) {
        var str = arrayOfNum[i]
        arrayOfNum[i] = str.split("").sort().join();
    }
    return newArray;
}
console.log(duplicates([2, 4, 7, 11, -2, 1]));

