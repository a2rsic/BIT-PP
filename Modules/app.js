const dataModule = (function () {
    const movieList = {
        movies: []
    }

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }

        getInfo() {
            return `${this.title}, ${this.length}, ${this.genre}`;
        }
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);

    }


    function addMovie(movie) {
        movieList.movies.push(movie)
    }

    return {
        addMovie,
        createMovie
    }

})();



const uiModule = (function () {

    const $movieTitle = document.querySelector(".movie-title");
    const $movieLength = document.querySelector(".movie-length");
    const $selectGenre = document.querySelector(".select-genre");
    const $movieListDiv = document.querySelector(".movie-list");

    function collectFormInput() {

        const title = $movieTitle.value;
        const length = parseInt($movieLength.value);
        const genre = $selectGenre.value;

        return {
            title,
            length,
            genre
        }
    }

    function displayMovie(movie) {
        let $p = document.createElement("p");
        $p.textContent = movie.getInfo();
        $movieListDiv.appendChild($p);
    }

    function resetInput() {
        $movieTitle.value = " ";
        $movieLength.value = " ";
    }

    return {
        collectFormInput,
        displayMovie,
        resetInput
    }
})();



const controller = (function (data, ui) {

    const $inputButton = document.querySelector(".create-movie");

    // setup event listener
    $inputButton.addEventListener("click", function (event) {

        const movieObj = ui.collectFormInput()
        // console.log(movieObj);

        const movieInstance = data.createMovie({ title, length, genre })
        data.addMovie(movieInstance)

        ui.displayMovie(movieInstance)
        // console.log(movieInstance);
        ui.resetInput();

    })
})(dataModule, uiModule);