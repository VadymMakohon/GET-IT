function updateViewSingleMovie() {
    const movieId = model.inputs.singleMovie.movieId;
    const movie = findMovieById(movieId);
    //const movie = model.movies.find(m => m.movieId == movieId);
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHTML()}
        <h1>${movie.title}</h1>
        <div>
            <img src="${movie.imageUrl}" style="height: 120px"/>
        </div>
        <div>
            <b></b><br/>
            ${movie.year}<br/>
            ${movie.genre}
        </div>
        <h3>Rating</h3>
        ${createCurrentRatingHtml()}
        <h3>Gi din rating: </h3>
        <div style="display: flex; font-size: 200%">
            ${createRatingHtml(movieId, 1)}
            ${createRatingHtml(movieId, 2)}
            ${createRatingHtml(movieId, 3)}
            ${createRatingHtml(movieId, 4)}
            ${createRatingHtml(movieId, 5)}
        </div>
    `;
}

function createRatingHtml(movieId, stars) {
    const rating = findRating(movieId, model.app.loggedInAsUserId);
    let style = '';
    if(rating != null && rating.stars >= stars){
        style = 'color: #cccc00';
    }
    return /*HTML*/`
        <div style="${style}" class="rating" onclick="addOrEditRating(${stars}, ${movieId})">★</div>    
    `;
}

function createCurrentRatingHtml() {
    const movieId = model.inputs.singleMovie.movieId;
    let ratingCount = 0;
    let ratingSum = 0;
    for (let rating of model.ratings) {
        if (rating.movieId == movieId) {
            ratingCount++;
            ratingSum += rating.stars;
        }
    }
    const rating = (ratingSum / ratingCount).toFixed(1);
    return /*HTML*/`
        Snitt rating: ${rating}<br/>
        Antall ratinger: ${ratingCount}<br/>
    `;
}
