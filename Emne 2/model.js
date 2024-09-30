const model = {
    // del 1:
    app: {
        currentPage: 'startPage', // filmInformasjon, opprettBruker, endreBruker, avansertSok, resultater, admin
    },

    // del 2:
    // Spørsmål: 
    // 1. Om variabelnavn kan være like i f.eks opprettBruker og endreBruker

    inputs: {
        startPage: {
            sokeTekst: 'The Mask',
            loggetInn: false,
        },

        filmInformasjon: {
            sokeTekst: 'The Mask',
            loggetInn: false,
            ratingInput: 0,
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
            favorittFilmer: [],
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
            loggetInn: false,
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
    logo: <link src="img/Logo.png"></link>,

    filmer: [
        {
            id: 1,
            bilde: 'src/image/TheMask.png',
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

    bruker: [
        {
            id: 1,
            bilde: '',
            brukernavn: 'Masken',
            passord: 'abc1234',
            epost: 'TheMaskFan@gmail.com',
            favorittSjanger: ['komedie', 'romanse'],
            favorittFilmer: ['Jim Carrey', 'Peter Greene', 'Cameron Diaz'],
            ratetFilmer: ['The Mask', 'From Dusk til Dawn'],
            endreValget: [''],
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