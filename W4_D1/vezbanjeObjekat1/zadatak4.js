
// Write a function to alphabetize words of a given string. 
// Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetizeWords(string) {
    var arrayOfWords = string.split(" ");


    for (var i = 0; i < arrayOfWords.length; i++) {
        var word = arrayOfWords[i]; //'Republic'

        arrayOfWords[i] = word.split("").sort().join('');


    }
    return arrayOfWords.join(" ");
}
console.log(alphabetizeWords("Republic Of Serbia"));

// "Republic Of Serbia".split(" "); --> ['Republic', 'Of', 'Serbia']