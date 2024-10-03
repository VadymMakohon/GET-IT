function updateViewSearch() {
    const movies = createMoviesHtmlAndCount();
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Filmer fra 2020-tallet</h1>
        <div>
            ${createFilterFormHtml()}
        </div>
        <div>
            ${createPagingHtml(movies.count)}
        </div>
        <table>
            ${createHeaderRow()}
            ${movies.html}
        </table>
    `;
}

function createHeaderRow() {
    return /*HTML*/`    
        <tr>
            <th></th>
            <th>
                Tittel 
                <button onclick="sort('title',1)" ${getDisabled('title', 1)}>▲</button>
                <button onclick="sort('title',-1)" ${getDisabled('title', -1)}>▼</button>
            </th>
            <th class="narrow"></th>
            <th>
                Sjanger 
                <button onclick="sort('genre',1)" ${getDisabled('genre', 1)}>▲</button>
                <button onclick="sort('genre',-1)" ${getDisabled('genre', -1)}>▼</button>
            </th>
            <th>
                År 
                <button onclick="sort('year',1)" ${getDisabled('year', 1)}>▲</button>
                <button onclick="sort('year',-1)" ${getDisabled('year', -1)}>▼</button>
            </th>
        </tr>    
    `;
}

function createPagingHtml(movieCount) {
    const pageCount = Math.ceil(movieCount / 10);
    const selectedPageNo = model.inputs.search.pageNo;
    const startPageNo = Math.max(2, selectedPageNo - 4);
    const endPageNo = Math.min(pageCount, startPageNo + 10);
    let html = '';
    if (startPageNo > 1) {
        html += createPageNoHtml(1, selectedPageNo) 
        if(startPageNo>2) html += ' ... ';
    }
    for (let pageNo = startPageNo; pageNo <= endPageNo; pageNo++) {
        html += createPageNoHtml(pageNo, selectedPageNo);
    }
    if (endPageNo < pageCount) {
        if(endPageNo< pageCount-1) html += ' ... ';
        html += createPageNoHtml(pageCount, selectedPageNo);
    }
    return html;
}

function createPageNoHtml(pageNo, selectedPageNo) {
    return selectedPageNo == pageNo ? ` <b>${pageNo}</b>` :
        /*HTML*/` <a href="javascript:selectPage(${pageNo})">${pageNo}</a>`;
}

function createFilterFormHtml() {
    const filter = model.inputs.search.filter;
    if (filter == null) {
        return /*HTML*/`<button onclick="updateFilterMode(true)">Filtrer</button>`;
    }
    return /*HTML*/`
        Tittel: <br/>
        <input 
            type="text" 
            oninput="model.inputs.search.filter.title=this.value"
            value="${model.inputs.search.filter.title ?? ''}"            
            />
            <br/>
        Sjanger: <br/>
        <select onchange="model.inputs.search.filter.genre=this.value">
            ${createOptionsHtml(model.genres, model.inputs.search.filter.genre)}
        </select>
        <br/>
        År: <br/>
        <select onchange="model.inputs.search.filter.year=this.value">
            ${createOptionsHtml(model.years, model.inputs.search.filter.year)}
        </select>
        <br/>
        <button onclick="filter()">Filtrer</button>        
        <button onclick="updateFilterMode(false)">Avbryt</button>        
    `;
}

function createOptionsHtml(values, selectedValue) {
    let html = /*HTML*/`<option ${selectedValue == null ? 'selected' : ''}></option>`;
    for (let value of values) {
        html += /*HTML*/`<option ${selectedValue == value ? 'selected' : ''}>${value}</option>`
    }
    return html;
}

function getDisabled(field, direction) {
    const sort = model.inputs.search.sort;
    if (!sort) return '';
    return sort.field == field && sort.direction == direction ? 'disabled' : '';
}

function createMoviesHtmlAndCount() {
    let html = '';
    let movies = doSelectedFilter(model.movies);
    const count = movies.length;
    movies = doSelectedSort(movies);
    movies = showOnlySelectedPage(movies);

    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        html += /*HTML*/`
            <tr>
                <td><img class="movie" src="${movie.thumbnail}"/></td>
                <td>
                    ${movie.title} 
                </td>
                <td>
                    <button onclick="showMovie(${i})">vis</button>
                    <button onclick="showTrailer(${i})">trailer</button>
                </td>
                <td>${movie.genres.join(', ')}</td>
                <td>${movie.year}</td>
            </tr>
        `;
    }
    return { html, count };
}

function showOnlySelectedPage(movies) {
    const pageNo = model.inputs.search.pageNo;
    if (pageNo == null) return movies;
    const startIndex = (pageNo - 1) * 10;
    return movies.slice(startIndex, startIndex + 10);
}

function doSelectedFilter(movies) {
    const filter = model.inputs.search.filter;
    if (filter == null) return movies;
    let filteredMovies = [];
    for (let movie of movies) {
        if (isMatch(filter.title, movie.title)
            && isMatch(filter.year, movie.year)
            && isMatch(filter.genre, movie.genres)) {
            filteredMovies.push(movie);
        }
    }
    return filteredMovies;
}

function isMatch(filterString, value) {
    if (typeof (filterString) != 'string' || filterString == '') return true;
    return typeof (value) == 'number' ? filterString == value : value.includes(filterString);
}

function doSelectedSort(movies) {
    const sort = model.inputs.search.sort;
    if (sort == null) return movies;

    const field = sort.field;
    const direction = sort.direction;
    return movies.toSorted((a, b) =>
        a[field] == b[field] ? 0 :
            a[field] < b[field] ? -direction : direction
    );

    // if (sort != null) {
    //     const field = sort.field;
    //     const direction = sort.direction;
    //     movies = JSON.parse(JSON.stringify(movies));
    //     movies.sort((a, b) =>
    //         a[field] == b[field] ? 0 :
    //             a[field] < b[field] ? -direction : direction
    //     );
    // }
}