function addOrEditRating(stars, movieId) {
    const userId = model.app.loggedInAsUserId;

    const currentRating = findRating(movieId, userId);
    if (currentRating == null) {
        const newRating = { stars, movieId, userId };
        model.ratings.push(newRating);
    } else {
        currentRating.stars = stars;
    }
    updateView();
}