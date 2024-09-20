function addColor() {
    model.colorThemes.push(addColorName);
    isAdding = false;
    addColorName = '';
    updateView();
}

function deleteColor(index) {
    model.colors.splice(index, 1);
    updateView();
}

function startAdd() {
    isAdding = true;
    updateView();
}

function cancelAddColor() {
    isAdding = false;
    updateView();
}