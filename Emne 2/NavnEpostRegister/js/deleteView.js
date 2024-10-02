function updateViewDelete() {
    document.getElementById('app').innerHTML = /*html*/`
            ${createMenuHtml()}
            <hr/>
            ${createPersonDeleteHtml()}
            <h3>Slett</h3>
            <input 
                type="checkbox"
                oninput="model.inputs.delete.areYouSure = this.checked"
                ${model.inputs.delete.areYouSure ? 'checked' : ''}
                />Er du sikker på at du vil slette?<br/>
            <button onclick="deletePerson()">Slett!</button>
        `;
}

function createPersonDeleteHtml() {
    const personId = model.inputs.delete.personId;
    const person = findPersonById(personId);
    return /*html*/`
        Navn: ${person.name}<br/>
        Epost: ${person.email}<br/>    
    `;
}
