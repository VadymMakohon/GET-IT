const model = {
    app: {
        loggedInAsUserId: 'terje',
        currentPage: 'singleMovie',
        user: {
            firstName: null,
            imageUrl: null,
        },
    },
    inputs: {
        loginPage: {
            userId: '',
            password: '',
            error: '',
        },
        profilePage: {
            firstName: '',
            imageUrl: '',
        },
        mainPage: {
        },
        singleMovie: {
            movieId: 1,
        },
    },
    themes: [
        { name: 'light', foreColor: 'black', backColor: 'white' },
        { name: 'dark', foreColor: 'lightgray', backColor: '#222222' },
        { name: 'mix', foreColor: 'white', backColor: 'darkblue' },
    ],
    users: [
        {
            userId: 'per',
            password: '123',
            firstName: 'Per',
        },
        {
            userId: 'pål',
            password: '',
            firstName: 'Pål',
        },
        {
            userId: 'espen',
            password: '321',
            firstName: 'Espen',
        },
        {
            userId: 'terje',
            password: '321',
            firstName: 'Terje',
        },
    ],
    ratings: [
        { movieId: 1, stars: 4, userId: 'per' },
        { movieId: 1, stars: 2, userId: 'pål' },
        { movieId: 1, stars: 5, userId: 'espen' },
    ],
    movies: [
        {
            id: 1,
            title: "Inception",
            genre: "Sci-Fi",
            director: "Christopher Nolan",
            year: 2010,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        },
        {
            id: 2,
            title: "The Godfather",
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
            year: 1972,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
        },
        {
            id: 3,
            title: "Pulp Fiction",
            genre: "Crime, Thriller",
            director: "Quentin Tarantino",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
        },
        {
            id: 4,
            title: "The Shawshank Redemption",
            genre: "Drama",
            director: "Frank Darabont",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
        },
        {
            id: 5,
            title: "Interstellar",
            genre: "Sci-Fi, Drama",
            director: "Christopher Nolan",
            year: 2014,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        }
    ],
};
