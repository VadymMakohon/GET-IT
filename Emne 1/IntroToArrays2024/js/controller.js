
function addColor() {
    const colorTheme = {
        foregroundColor: model.foregroundColor,
        backgroundColor: model.backgroundColor,
        highlightColor: model.highlightColor,
        creator: model.creator,
        rating: model.rating,
    };
    model.colorThemes.unshift(colorTheme);
    model.isAdding = false;
    model.addColorName = '';
    updateView();
}

function deleteColor(index) {
    model.colorThemes.splice(index, 1);
    updateView();
}

function startAdd() {
    model.isAdding = true;
    updateView();
}

function cancelAddColor() {
    model.isAdding = false;
    updateView();
}

function filterByCreator(creator) {
    model.creatorFilter = creator;
    updateView();
}

function sortBy(sortField) {
    model.sort = sortField;
    updateView();
}