function updateViewMain() {
    const firstName = model.app.user.firstName;
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Velkommen${firstName == null ? '!' : ', ' + firstName}<h1>
        ${createMenuHTML()}
    `;
}