function updateViewEditProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Redigere profil</h1>
        <button onclick="goToPage()">Meny</button>

        <div style="display: grid; grid-template-columns: 100px 200px">
            <div>Fornavn:</div>
            <input 
                type="text"
                oninput="model.inputs.profilePage.firstName = this.value" 
                value="${model.inputs.profilePage.firstName || ''}"
                />
            <div>Bilde:</div>
            <input 
                type="text"
                oninput="model.inputs.profilePage.imageUrl = this.value" 
                value="${model.inputs.profilePage.imageUrl || ''}"
                />
        </div>    
        <button onclick="saveProfile()">Oppdatere</button>             
    `;
}