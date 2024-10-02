function editPerson() {
    const person = findPersonById(model.inputs.edit.personId);
    person.name = model.inputs.edit.name;
    person.email = model.inputs.edit.email;
    model.app.page = 'search';
    updateView();
}