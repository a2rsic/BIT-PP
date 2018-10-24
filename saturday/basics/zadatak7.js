// Write a function that prints out number of input arguments of the function.

function printsNumsOfArguments() {
    return arguments.length;
}
console.log(printsNumsOfArguments(1, 2, 4, 5));