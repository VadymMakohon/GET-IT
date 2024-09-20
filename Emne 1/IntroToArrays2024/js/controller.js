function addColor() {
    colors.push(addColorName);
    isAdding = false;
    addColorName = '';
    updateView();
}

function deleteColor(index) {
    colors.splice(index, 1);
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