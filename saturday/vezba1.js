// 1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function stringInput(string) {
  var input;

  if (typeof string === "string") {
    input = true;
  } else {
    input = false;
  }
  return input;
}
console.log(stringInput("My random string"));

// 2. Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function checkString(str) {
  var check;

  if (str == "") {
    check = true;
  } else {
    input = false;
  }
  return check;
}
console.log(checkString(""));

// 3. Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenates(s, n) {
  var sum = ""
  for (var i = 0; i < n; i++) {

    sum += s;                       //nadovezivanje
  }
  return sum;
}
console.log(concatenates("ha", 3));













// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function count_num(st, let) {
    var brojPonavljanja = 0;

    for (var i = 0; i < st.length; i++) {
        if (let == st[i]) {
            brojPonavljanja++;
        }
    }  

    return brojPonavljanja;
}

console.log(count_num("My random string", "n"));









// 5.Write a function to find the position of the first occurrence of a character in a string. 
// The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function firstChar(text, character) {
    var poss = -1;

    for ( var i = 0; i < text.length; i++) {
        if (character == text[i]) {
            poss = i;
            break;
        }
    }

    return poss;
}
console.log(firstChar("some random text", "o"))



