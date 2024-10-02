function createMenuHtml() {
    return /*html*/`
        <button onclick="model.app.page='search'; updateView()">Søk</button>
        <button onclick="model.app.page='createNew'; updateView()">Legge til</button>
    `;
}

function findPersonById(id) {
    for (let person of model.people) {
        if (person.id === id) return person;
    }
    return null;
}

function findPersonIndexById(id) {
    for (let i = 0; i < model.people.length; i++) {
        let person = model.people[i];
        if (person.id === id) return i;
    }
    return null;
}

function findObjectById(id, list) {
    for (let obj of list) {
        if (obj.id === id) return obj;
    }
    return null;
}

function getMaxPersonId() {
    let id = 0;
    for (let person of model.people) {
        if (person.id > id) id = person.id;
    }
    return id;
}