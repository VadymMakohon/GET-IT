function deletePerson() {
    if (!model.inputs.delete.areYouSure) return;
    const index = findPersonIndexById(model.inputs.delete.personId);
    model.people.splice(index, 1);
    model.app.page = 'search';
    updateView();
}