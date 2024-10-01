function saveProfile(){
    const app = model.app;
    const inputs = model.inputs;
    const user = app.user;
    const profilePage = inputs.profilePage;
    user.firstName = profilePage.firstName;
    user.imageUrl = profilePage.imageUrl;
    app.currentPage = 'main';
    updateView();
}