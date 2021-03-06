"use strict";

(function () {
    function Product(id, name, price, expiratinDate) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.expiratinDate = new Date(expiratinDate);

        this.getInfo = function () {
            var firstLetter = this.name[0];
            var lastLetter = this.name[this.name.length - 1];
            return firstLetter + lastLetter + "," + this.id + "," + this.price;

        }
    }

    function SoppingBag() {
        this.listOfProduct = [];

        this.addProduct = function (product) {
            if (product.expiratinDate > new Date()) {
                this.listOfProduct.push(product);
            }
        }

        this.calculatesAveragePrice = function () {
            var sum = 0;

            for (var i = 0; i < this.listOfProduct.length; i++) {

                var element = this.listOfProduct[i];

                var elementPrice = element.price;

                sum += elementPrice;
            }

            return sum / this.listOfProduct.length;

        }
        console.log(calculatesAveragePrice());

        this.getMostExpensive = function () {
            var mostExpensiveProduct;
            return secondEl - firstEl;



        }

    }
    var apple = new Product(36483, "apple", 60.99, "12.12.2018");
    var banana = new Product(64377, "banana", 129.10, "12.31.2018");
    var grejp = new Product(54785, "grejp", 85.50, "11.01.2018");

    var mojaKorpa = new SoppingBag();
    mojaKorpa.addProduct(grejp);
    mojaKorpa.addProduct(banana);
    mojaKorpa.addProduct(apple);
    mojaKorpa.calculatesAveragePrice();
    console.log();

})();


