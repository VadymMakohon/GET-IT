function updateViewPreview(){
    const index = model.inputs.preview.movieIndex;
    const movie = model.movies[index];

    document.getElementById('app').innerHTML = /*HTML*/`
        <img 
            src="${movie.thumbnail}"
            style="
                float: right;
                width: ${movie.thumbnail_width*4}; 
                height: ${movie.thumbnail_height*4}; 
                "
            />
        <h1>${movie.title} - ${movie.year}</h1>

        <h3>Skuespillere</h3>
        <ul>
            <li>${movie.cast.join('<li>')}
        </ul>
        <p>
            ${movie.extract}
        </p>
        <div>
            <button onclick="goTo('search')">Tilbake</button>
        </div>
    `;
}