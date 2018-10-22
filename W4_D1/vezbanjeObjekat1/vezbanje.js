//type = string;
//strength = number;
//sugar = number;
//milk = boolean;

//addSugar
//printInfo

function Coffee(type, strength, sugar, milk) {

    // var this = {};
    this.typeOfCoffee = type;
    this.coffeeStrength = strength;
    this.sugar = sugar;
    this.withMilk = milk;
    //ovo na dole su metode
    this.addSugar = function () {
        this.sugar++;
    };
    this.printInfo = function () {
        console.log("Our coffee:" + this.typeOfCoffee);
        //this.coffeeStrength
        //ako je 1 ili 2 kasicice secera, onda je slaba kafa = weak;
        // 3 ili 4 = regular 
        // 5 ili 6 = strong

        switch (this.coffeeStrength) {
            case 1:
            case 2:
                console.log("Weak coffee");
                break;

            case 3:
            case 4:
                console.log("Regular coffee");
                break;

            case 4:
            case 5:
                console.log("Strong coffee");
                break;
        }
        //ako je kolicina secera veca od 2 kasicice >2 
        if (this.sugar > 2) {
            console.log("Super sweet coffee");
        } else {
            console.log("Not so sweet!");
        }
        //da li je kafa sa  mlekom ili ne 
        var milkMessage;
        milkMessage = (this.withMilk == true) ? "with milk" : "without milk";
        console.log(milkMessage);
    }
}

var ourCoffee = new Coffee("Mocha", 3, 1, true);
ourCoffee.printInfo();
ourCoffee.addSugar();
ourCoffee.addSugar();
ourCoffee.printInfo();

console.log(ourCoffee);










///
var s = new String("abc");



