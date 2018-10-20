// Write a function that reverses a word or sentence. Cover cases if sentence is not provided

function reversesWord (string) {
    var newString = "";
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i]; 

    }
    return newString;
}
console.log(reversesWord("String"));