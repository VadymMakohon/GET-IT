function createNewPerson() {
    const person = {};
    person.id = getMaxPersonId() + 1;
    person.name = model.inputs.createNew.name;
    person.email = model.inputs.createNew.email;
    model.app.page = 'search';
    model.people.push(person);
    updateView();
}