function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    return (name[0] + name[name.length - 1]).toUpperCase();
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min" + ", " + this.genre.getData();
}


