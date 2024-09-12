function buyCoke() {
    const valueOfCoinsInserted = valueFromCoinCounts(coinsInserted);

    if (!checksPassed(valueOfCoinsInserted)) return;

    takeInsertedCoins();

    returnChange(valueOfCoinsInserted - cokePrice);

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
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}

function takeCoke() {
    isCokeInDelivery = false;
    updateView();
}

function returnChange(change) {
    for (let j = 3; j >= 0; j--) {
        let coinValue = coinValueFromIndex(j);
        while (change - coinValue >= 0 && coinsInMachine[j] > 0) {
            coinsReturned[j]++;
            coinsInMachine[j]--;
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

function checksPassed(valueOfCoinsInserted) {
    if (!inStock() || !hasInsertedEnough(valueOfCoinsInserted)) return false;
    errorMessage = "";
    return true;
}

function inStock() {
    if (cokesInStore < 1) {
        errorMessage = "Det er ikke mer Cola igjen :(";
        updateView();
        return false;
    }
    return true;
}

function hasInsertedEnough(valueOfCoinsInserted) {
    if (valueOfCoinsInserted < cokePrice) {
        errorMessage = "Du har ikke nok penger";
        updateView();
        return false;
    }
    return true;
}
/*
   1. Sjekke om du har nok penger (og få opp feilmelding hvis ikke)
   2. Hvis du betaler for mye skal du få riktig veksel tilbake
   3. Cola skal vises i utkast (utenfor blå boks) OK
   4. Cola i maskin skal minke OK
   5. Sjekke at det er cola i maskinen (få opp feilmelding hvis ikke) OK
   6. Myntene du har betalt for cola skal inn i maskinen (coinsInMachine)
*/