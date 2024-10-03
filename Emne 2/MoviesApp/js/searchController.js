function sort(field, direction) {
    model.inputs.search.sort = { field, direction };
    updateView();
}

function updateFilterMode(filterMode) {
    model.inputs.search.filter = !filterMode ? null : {
        title: '',
        genre: '',
        year: '',
    };
    updateView();
}

function selectPage(pageNo) {
    model.inputs.search.pageNo = pageNo;
    updateView();
}

function showMovie(index) {
    model.inputs.preview.movieIndex = index;
    model.app.currentPage = 'preview';
    updateView();
}

function showTrailer(index) {
    const movie = model.movies[index];
    const url = `https://www.youtube.com/results?search_query=${movie.title} ${movie.year} trailer`;
    window.open(url, '_blank');
}

function filter(){
    model.inputs.search.pageNo = 1;
    updateView();
}