"use strict";

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var newString = this.name[0] + this.name[name.length - 1];
            return newString.toUpperCase();
        }
    }

    // console.log(drama.getData());

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.name;
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + "min " + ", " + this.genre.getData();
        }
    }

    // console.log(titanic.getData());

    function Program(date) {
        this.date = new Date(date);
        this.totalNumberOfMovies = 0;
        this.listOfMovies = [];
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;
        }
        this.getData = function () {
            var totalLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalLength += this.listOfMovies[i].length;
            }
            return totalLength;
        }
    }
    // var program = new Program(new Date().getDate, 4);

    // console.log(program.listOfMovies);

    function Festival(name, numberOfMovies) {
        this.name = name;
        this.numberOfMovies = numberOfMovies;
        this.listOfPrograms = [];

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {

        }
    }

    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");


    var titanic = createMovie("Titanic", drama, 150);
    var superman = createMovie("Superman", action, 120);
    var minions = createMovie("Minions", comedy, 90);

    var program1 = createProgram("2018-11-15");
    var program2 = createProgram("2019-01-01");

    var festival = new Festival("Weekend festival");

    program1.addMovie(titanic);
    program1.addMovie(minions);
    program2.addMovie(superman);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());


})();






// this.getProgramDuration = function () {
//     var totalDuration = 0;
//     for (var i = 0; i < this.listOfMovies.length; i++) {
//         totalDuration += this.listOfMovies[i].length;
//     }
//     return totalDuration;
// }

// var time = new Date(this.date).getDate();
// var output = time + ", " + this.getProgramDuration() + ", " + this.genre;
