// Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”


function replacesString(string) {
    var newString = '';


    for (var i = 0; i < string.length - 1;) {

        if (string[i] == "J" && string[i + 1] == "S") {
            newString += "**";
            i += 2;
        } else {
            newString += string[i];
            i++;
        }
    }
    return newString;
}
console.log(replacesString("Programming in JS is super interesting!"));

string.indexOf("JS")

stringAsArray = string.split(''); //splice(pozicija, 2, '*', '*)

function replaceString(string) {
    stringAsArray = new Array(string);
    string.split("");


    return stringAsArray.splice(0, "JS", "*", "*").join("");
}
console.log(replaceString("Programming in JS is super interesting!"));