// Funksjon som vasker teksten
function cleanText(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';  // All letters
    let cleanedText = '';

    for (let character of text) {
        if (letters.includes(character)) {  // Only include letters
            cleanedText += character.toLowerCase();
        }
    }

    return cleanedText;
}


// Opprinelig funksjon som sjekker om en tekst er et palindrom
function isPalindrome(text) {
    const cleaned = cleanText(text);
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isPalindrome("Anna")); // true
console.log(isPalindrome("Eva"));  // false