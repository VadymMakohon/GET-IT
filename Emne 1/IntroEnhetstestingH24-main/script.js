function formatHeader(text, starCount) {
    const stars = '*'.repeat(starCount);
    let space = starCount ? ' ' : '';
    return stars + space + (text ?? '') + space + stars;
}











