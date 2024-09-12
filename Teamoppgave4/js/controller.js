/* 
    1. Sjekke om du har nok penger (og få opp feilmelding hvis ikke) OK
    2. Sjekke at det er cola i maskinen (få opp feilmelding hvis ikke) OK
    3. Hvis du betaler for mye skal du få riktig veksel tilbake OK
    4. Cola skal vises i utkast (utenfor blå boks) OK
    5. Cola i maskin skal minke OK
    6. Myntene du har betalt for cola skal inn i maskinen (coinsInMachine) OK
*/
function buyCoke() {
    const valueOfInsertedCoins = valueFromCoinCounts(coinsInserted);

    if (!inStockAndEnoughInserted(valueOfInsertedCoins)) return;

    takeInsertedCoins();

    returnChange(valueOfInsertedCoins - cokePrice);

    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function insertCoin(coinIndex) {
    coinsInserted[coinIndex]++;
    errorMessage = "";
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    errorMessage = "";
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    errorMessage = "";
    updateView();
}

function takeCoke() {
    isCokeInDelivery = false;
    errorMessage = "";
    updateView();
}

function returnChange(change) {
    for (let i = 3; i >= 0; i--) {
        let coinValue = coinValueFromIndex(i);
        while (change - coinValue >= 0 && coinsInMachine[i] > 0) {
            coinsReturned[i]++;
            coinsInMachine[i]--;
            change -= coinValue;
        }
    }
}

function takeInsertedCoins() {
    for (let i = 0; i < coinsInserted.length; i++) {
        coinsInMachine[i] += coinsInserted[i];
    }
    coinsInserted = [0, 0, 0, 0];
}

function inStockAndEnoughInserted(valueOfCoinsInserted) {
    if (cokesInStore < 1) {
        errorMessage = "Det er ikke mer Cola igjen :(";
        updateView();
        return false;
    }
    if (valueOfCoinsInserted < cokePrice) {
        errorMessage = "Du har ikke nok penger";
        updateView();
        return false;
    }
    errorMessage = "";
    return true;
}