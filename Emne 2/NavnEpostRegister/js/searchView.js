function updateViewSearch() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}
        <hr/>
        <h3>Søk</h3>
        <input 
            type="text" 
            oninput="model.inputs.search.text=this.value"
            value="${model.inputs.search.text || ''}"
            />
        <button onclick="updateView()">Søk</button>

        <h4>Søkeresultater:</h4>
        <ul>
            ${createHtmlPeople()}    
        </ul>
    `;
}

function createHtmlPeople() {
    let html = '';
    let people = model.people;
    const searchText = model.inputs.search.text;
    if (searchText !== '') {
        people = filterPeople(searchText, people);
    }
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        html += /*html*/`
            <li>
                ${person.name} 
                ${person.email} 
                <button onclick="goToEditPage(${person.id})">endre</button>
                <button onclick="goToDeletePage(${person.id})">x</button>
            </li>
        `;
    }
    return html;
}

function filterPeople(searchText, people) {
    searchText = searchText.toLowerCase();
    let filteredList = [];
    for (let person of people) {
        const name = person.name.toLowerCase();
        const email = person.email.toLowerCase();
        if (name.indexOf(searchText) != -1
         || email.indexOf(searchText) != -1) {
            filteredList.push(person);
        }
    }
    return filteredList;
}