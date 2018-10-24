
// Write a function that replaces all white spaces with dash (-)

function replacesSpaces(string) {
    var newString = "";
    for( var i = 0; i < string.length; i++) {
        if(string[i] == " ") {
            newString += "-";
        } else {
            newString += string[i];
        }
    }
    return newString;
}
console.log(replacesSpaces("New String this is."));
