"use strict";

(function () {
    function Genre(name) {
        this.name = name;

        this.getData = function () {
            var newString = this.name[0] + this.name[name.length - 1];
            return newString.toUpperCase();
        }
    }



    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + " , " + this.length + " , " + genre.getData();
        }
    }


    function Program(date, totalNumberOfMovies) {
        this.date = date;
        this.totalNumberOfMovies = totalNumberOfMovies;
        this.listOfMovies = [];

        this.addMovie = function (movie) {
            this.movie = movie;
            this.listOfMovies.push(movie);

        }
        this.getData = function () {
            
        }

    }

    function Festival(name, numberOfMovies) {
    this.name = name;
    this.numberOfMovies = numberOfMovies;
    this.listOfPrograms = [];

    this.addProgram = function (program) {
        this.program = program;
        this.listOfPrograms.push(program);
    }
}

    var genre = new Genre("Action");
    console.log(genre.getData());

    var movie = new Movie("titanic", "drama", "150min");
    console.log(movie.getData());

    var program = new Program ("2018-11-01", "4");
    console.log(program.addMovie());
})();