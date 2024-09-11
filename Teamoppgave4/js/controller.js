function buyCoke() {
    /* 
    1. Sjekke om du har nok penger (og få opp feilmelding hvis ikke)
    2. Hvis du betaler for mye skal du få riktig veksel tilbake
    3. Cola skal vises i utkast (utenfor blå boks) OK
    4. Cola i maskin skal minke OK
    5. Sjekke at det er cola i maskinen (få opp feilmelding hvis ikke) OK
    6. Myntene du har betalt for cola skal inn i maskinen (coinsInMachine)
    */

    if (cokesInStore < 1) return;

    if (valueFromCoinCounts(coinsInserted) < cokePrice) {
        errorMessage = `Du har ikke nok penger`;
        updateView();
        return;
    }

    if (valueFromCoinCounts(coinsInserted) > cokePrice) {
        let leftoverMoney = valueFromCoinCounts(coinsInserted) - cokePrice;
        for (let j = 0; j < coinsInserted.length; j++) {
            let coinValue = coinValueFromIndex(j);
            while (leftoverMoney - coinValue >= 0 && coinsInMachine[j] > 0) {
                coinsReturned[j]++;
                coinsInMachine[j]--;
                leftoverMoney -= coinValue;
            }
        }
    }

    let valueTaken = 0;

    for (let i = 0; i < coinsInserted.length; i++) {

        let coinValue = coinValueFromIndex(i); // runde 1: verdi=1, runde 2: verdi=5, ...
        // coinsInserted = [0,2,0,1]
        while (coinsInserted[i] > 0 && valueTaken < cokePrice) {
            coinsInserted[i]--;
            coinsInMachine[i]++;
            valueTaken += coinValue;
        }
    }

    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function insertCoin(coinIndex) {
    coinsInserted[coinIndex]++;
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