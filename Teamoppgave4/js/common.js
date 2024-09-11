function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function coinValueFromIndex(index){
    const values = [1, 5, 10, 20];
    return values[index];
}