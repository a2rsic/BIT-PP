// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

function convertString(string) {
    var newString = string.split(" ");

    // prepisati celu prvu rec i dodamo pocetno slovo druge
    var name = newString[0];
    var surname = newString[1];
    surname[0];

    // name  +" " +surname[0] + "."

    return name + " " + surname[0] + ".";
}
console.log(convertString("John Snow"));