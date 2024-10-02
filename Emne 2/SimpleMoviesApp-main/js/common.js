function findMovieById(id) {
    for (let movie of model.movies) {
        if (movie.id == id) return movie;
    }
    return null;
}

function findRating(movieId, userId) {
    for (let rating of model.ratings) {
        if (rating.movieId == movieId && rating.userId == userId) return rating;
    }
    return null;
}