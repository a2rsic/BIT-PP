// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true


// Input: “1bser9re”
// Output: false

function checksDigit(string) {
    var result = false;
    var newString = new String(string);
    for (var i = 0; i < newString.length; i++) {
        var element = newString[i];

        if (element == 5) {
            return true;
        }

    }
    return result;
}
console.log(checksDigit("1b89abd"));


//verzija 2:

// indexOf(5) --> daje poziciju, ako se trazeni broj nalazi u stringu/nizu, u suprotnom vraca rezultat -1 ako se ne nalazi u nizu.