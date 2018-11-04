//a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

var newArray = [];

function Product(name, price) {
    this.name = name;
    this.price = price;
    // return this.name + "," + this.price;
}
var firstList = new Product("apples", 100);
// console.log(firstList);

var secondList = new Product("milk", 80);
// console.log(secondList);

var thirdList = new Product("bananas", 150);
// console.log(thirdList);

newArray = [firstList, secondList, thirdList];
console.log(newArray);



//b. Write a function that calculates the total price of your shopping list. 
function totalPrice(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var product = array[i];
        sum += product.price;
    }
    return "Total preice is: " + sum;
}
console.log(totalPrice(newArray));

// c.Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
function averagePrice(array) {
    var result;
    for (var i = 0; i < array.length; i++) {
        var product = array[i];
        result = product.price / product.length;
    }
    return result;
}
console.log(averagePrice(newArray));



//d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
function mostExpensiveProduct(array) {
    var element;
    for (var i = 0; i < array.length; i++) {

    }
}