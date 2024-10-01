function logIn() {
    const inputs = model.inputs.loginPage;
    const userId = inputs.userId;
    const password = inputs.password;
    if (userExists(userId, password)) {
        model.app.loggedInAsUserId = userId;
    } else {
        model.inputs.loginPage.error = 'Ugyldig brukernavn eller passord';
    }
    updateView();
}

function userExists(userId, password) {
    for (let user of model.users) {
        if (user.userId == userId && user.password == password) return true;
    }
    return false;
}