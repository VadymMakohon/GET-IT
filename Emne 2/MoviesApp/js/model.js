const model = {
    app: { // del 1
        currentPage: 'search',
    },

    inputs: { // del 2
        search: {
            sort: null, // { field: 'title', direction: 1 }
            filter: null, // { title: '', genre: '', year: '' }
            pageNo: 1,
        },
        add: {

        },
        edit: {

        },
        preview: {
            movieIndex: null,
        },
    },

    // del 3 - data
    movies: [], // leses inn via movies.js
    genres: [], // 
    year: [], //
};
