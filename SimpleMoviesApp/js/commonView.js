function createMenuHTML() {
    const imageUrl = model.app.user.imageUrl;
    let imageHtml = '';
    if (imageUrl != null) {
        imageHtml = `<img src="${imageUrl}" style="width: 50px; height: 50px;"/>`;
    }
    return /*HTML*/`
        <button onclick="goToPage('movies')">Filmer</button>
        <button onclick="goToPage('editProfile')">Redigere profil</button>
        <button onclick="logOut()">
            ${imageHtml}
            Logg ut</button>
    `;
}
