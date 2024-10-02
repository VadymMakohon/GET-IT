function updateViewCreateNew() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}
        <hr/>
        <h3>Legg til ny person</h3>
        Navn: <br/>
        <input 
            type="text" 
            value="${model.inputs.createNew.name}"
            oninput="model.inputs.createNew.name=this.value"
        />
        <br/>
        Epost: <br/>
        <input 
            type="text" 
            value="${model.inputs.createNew.email}"
            oninput="model.inputs.createNew.email=this.value"
        />
        <br/>    
        <button onclick="createNewPerson()">Legg til</button>
    `;
}