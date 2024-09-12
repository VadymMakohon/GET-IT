function outsideApartment() {
    document.getElementById('content').innerHTML = `
        <h1>Du er utenfor en leilighet.</h1>
        <button onclick="enterHallway()">Gå inn</button>
    `;
}

function enterHallway() {
    document.getElementById('content').innerHTML = `
        <h1>Du er i gangen.</h1>
        <button onclick="outsideApartment()">Gå ut</button>
        <button onclick="enterLivingRoom()">Gå inn i stua</button>
        <button onclick="enterBathroom()">Gå inn på badet</button>
        <button onclick="enterKitchen()">Gå inn på kjøkkenet</button>
    `;
}

function enterLivingRoom() {
    document.getElementById('content').innerHTML = `
        <h1>Du er i stua.</h1>
        <button onclick="enterHallway()">Gå til gangen</button>
        <button onclick="enterKitchen()">Gå til kjøkkenet</button>
    `;
}

function enterBathroom() {
    document.getElementById('content').innerHTML = `
        <h1>Du er på badet.</h1>
        <button onclick="enterHallway()">Gå til gangen</button>
    `;
}

function enterKitchen() {
    document.getElementById('content').innerHTML = `
        <h1>Du er på kjøkkenet.</h1>
        <button onclick="enterHallway()">Gå til gangen</button>
        <button onclick="enterLivingRoom()">Gå til stua</button>
    `;
}

// Start the application
outsideApartment();