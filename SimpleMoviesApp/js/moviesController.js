function showMovie(movieId) {
    model.app.currentPage = 'singleMovie';
    model.inputs.singleMovie.movieId = movieId;
    updateView();
}