let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 2);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

// console.log(personalMovieDB);

function movieInput() {
    let movie = prompt('Один из последних просмотренных фильмов?');
    let movieRating = prompt('На сколько оцените его?');
    personalMovieDB.movies[movie] = movieRating;
}

movieInput();
movieInput();
console.log(personalMovieDB.movies);