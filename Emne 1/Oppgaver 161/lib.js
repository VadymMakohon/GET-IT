function fixText(txt) {
    // Trimme mellomrom først og sist
    txt = txt.trim();

    // Hvis teksten ikke er tom
    if (txt.length > 0) {
        // Returner første bokstav som stor og resten som små bokstaver
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    }

    // Hvis teksten er tom, returner den som den er
    return txt;
}
