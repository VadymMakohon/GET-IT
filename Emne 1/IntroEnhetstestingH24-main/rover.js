function translateText(text) {
    let consonants = 'bcdfghjklmpqrstvwxz';
    consonants += consonants.toUpperCase();
    let translatedText = '';
    for (let character of text) {
        translatedText += character;
        if (consonants.includes(character)) {
            translatedText += 'o' + character.toLowerCase();
        }
    }
    return translatedText;
}