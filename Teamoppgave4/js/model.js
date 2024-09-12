const oneKr = 0;
const fiveKr = 1;
const tenKr = 2;
const twentyKr = 3;
const cokePrice = 25;

let coinsInMachine = [
    20, // enkroninger
    15, // femkroninger
    10, // tikroninger
    5, // tjuekroninger
];

let coinsInserted = [
    0, // enkroninger
    0, // femkroninger
    0, // tikroninger
    0, // tjuekroninger
];

let coinsReturned = [
    0, // enkroninger
    0, // femkroninger
    0, // tikroninger
    0, // tjuekroninger
];

let cokesInStore = 10;
let isCokeInDelivery = false;
let errorMessage = '';