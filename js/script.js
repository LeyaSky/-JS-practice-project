let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 2);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function movieCountCheck() {
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30){
        alert('Вы классический зритель');
    } else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else{
        alert('Произошла ошибка');
    }
}

movieCountCheck();

// console.log(personalMovieDB);

function moviesInput() {
    for(let i = 0; i <2; i++){
        let movie = prompt('Один из последних просмотренных фильмов?');
        let movieRating = prompt('На сколько оцените его?');
        personalMovieDB.movies[movie] = movieRating;
    }
}

moviesInput();

//console.log(personalMovieDB);
