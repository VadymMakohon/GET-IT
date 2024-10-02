const model = {
    // 1: tilstanden selve applikasjonen er i
    app: {
        page: 'search', // createNew, delete, edit
    },

    // 2: inputfelter til hver side
    inputs: {
        search: {
            text: '',
        },
        createNew: {
            name: '',
            email: '',
        },
        delete: {
            areYouSure: false,
            personId: null,
        },
        edit: {
            personId: null,
            name: '',
            email: '',
        }
    },

    // 3: felles data
    people: [
        { id: 1, name: 'Per', email: 'per@mail.com' },
        { id: 2, name: 'Pål', email: 'pål@hotmail.com' },
        { id: 3, name: 'Espen', email: 'espen@getacademy.no' },
    ],
};