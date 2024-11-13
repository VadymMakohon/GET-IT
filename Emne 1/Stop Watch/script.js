let secondElapsed = 0;
let interval = null;
const time = documen.getElementById("time")

function setTime() {
    time.innerHTML = secondsElapsed;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    secondsElapsed++;
}

function stopClock() {
    interval = setInterval(timer, 1000)
}

function resetClock() {

}