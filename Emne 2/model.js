const model = {
    // del 1:
    app: {
        currentPage: 'startPage', // filmInformasjon, opprettBruker, endreBruker, avansertSok, resultater, admin
        loggetInn: false,
    },

    // del 2:
    // Spørsmål: 
    // 1. Om variabelnavn kan være like i f.eks opprettBruker og endreBruker

    inputs: {
        startPage: {
            sokeTekst: 'The Mask',
        },

        filmInformasjon: {
            filmId: 1,
            sokeTekst: 'The Mask',
            kommentarTekst: '',
        },

        opprettBruker: {
            bilde: '',
            epost: '',
            brukernavn: '',
            passord: '',
            favorittSjanger: [],
            favorittFilmer: [],
            sokeTekstBruker: 'The Mask',
        },

        endreBruker: {
            bilde: '',
            epost: '',
            brukernavn: '',
            passord: '',
            favorittSjanger: [],
            sokeTekstBruker: 'The Mask',
        },

        avansertSok: {
            bilde: '',
            utgivelse: '',
            sjanger: [],
            skuespillere: [],
            ratingOver: 0,
        },

        resultatPage: {
            sokeTekst: 'The Mask',
        },

        adminPage: {
            bilde: '',
            utgivelse: '',
            sjanger: [],
            skuespillere: [],
            nyFilm: [],
        }
    },

    // del 3 - felles data
    filmer: [
        {
            id: 1,
            bilde: 'Logo.png',
            navn: 'The Mask',
            rating: 900,
            utgivelse: 1994,
            sjanger: ['komedie', 'fantasi', 'romanse', 'krim'],
            skuespillere: ['Jim Carrey', 'Peter Greene', 'Cameron Diaz'],
        },
        {
            id: 2,
            navn: 'From Dusk til Dawn',
            rating: 900,
            utgivelse: 1980,
            sjanger: [''],
            skuespillere: [''],
        }
    ],
    ratingsAndFavorites: [
        { userId: 1, filmId: 1, rating: 4, isFavorite: true },
        { userId: 2, filmId: 1, rating: 4 },
        { userId: 1, filmId: 2, rating: 4 },
        { userId: 3, filmId: 3, rating: 4 },
        { userId: 1, filmId: 5, isFavorite: true },
    ],

    bruker: [
        {
            id: 1,
            bilde: '',
            brukernavn: 'Masken',
            passord: 'abc1234',
            epost: 'TheMaskFan@gmail.com',
            favorittSjanger: ['komedie', 'romanse'],
            endreValget: [''],
            isAdmin: true,
        }
    ]
};

/*
Besvare tre spørsmål for hvert skjermbilde 
1. Hvilke data trenger vi i modellen for å 
   tegne opp dette skjermbildet?
2. Bruker inputs, tekstfelt, sortering
3. Hva kan ev. brukeren gjøre på denne siden 
   - og hva trenger vi i modellen for det? 

*/