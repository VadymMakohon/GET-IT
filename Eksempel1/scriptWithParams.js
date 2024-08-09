

function selectHead1() {
    selectHead(4, 1, 2);
}

function selectHead2() {
    selectHead(1, 2, 3);
}

function selectHead3() {
    selectHead(2, 3, 4);
}

function selectHead4() {
    selectHead(3, 4, 1);
}

function selectHead(previousNumber, currentNumber, nextNumber) {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead${previousNumber}()">◀</button>
        <img src="img/head${currentNumber}.png" />
        <button onclick="selectHead${nextNumber}()">▶</button>
    `;
}


function selectBody1() {
    selectBody(4, 1, 2);
}

function selectBody2() {
    selectBody(1, 2, 3);
}

function selectBody3() {
    selectBody(2, 3, 4);
}

function selectBody4() {
    selectBody(3, 4, 1);
}

function selectBody(previousNumber, currentNumber, nextNumber) {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody${previousNumber}()">◀</button>
        <img src="img/body${currentNumber}.png" />
        <button onclick="selectBody${nextNumber}()">▶</button>
    `;
}

function selectLegs1() {
    selectLegs(4, 1, 2);
}

function selectLegs2() {
    selectLegs(1, 2, 3);
}

function selectLegs3() {
    selectLegs(2, 3, 4);
}

function selectLegs4() {
    selectLegs(3, 4, 1);
}

function selectLegs(previousNumber, currentNumber, nextNumber) {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs${previousNumber}()">◀</button>
        <img src="img/legs${currentNumber}.png" />
        <button onclick="selectLegs${nextNumber}()">▶</button>
    `;
}
