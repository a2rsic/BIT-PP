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


function Product(name, price) {
    this.name = name;
    this.price = price;
    // return this.name + "," + this.price;

}
var secondList = new Product("milk", 80);
// console.log(secondList);


function Product(name, price) {
    this.name = name;
    this.price = price;
    // return this.name + "," + this.price;

}
var thirdList = new Product("bananas", 150);
// console.log(thirdList);

    newArray = [firstList, secondList, thirdList];
    console.log(newArray);



//b. Write a function that calculates the total price of your shopping list. 
    function totalPrice(price) {
        var result = 0;
        result += price;
        return result;
    }
    console.log(totalPrice(result));

// c.Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
//d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
