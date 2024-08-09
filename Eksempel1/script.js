function noLayout() {
    document.getElementById('cards').classList.value = '';
}

function horizontalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('horizontal');
}

function verticalLayout() {
    noLayout();
    document.getElementById('cards').classList.add('vertical');
}

function gridLayout() {
    noLayout();
    document.getElementById('cards').classList.add('grid');
}

function showTools() {
    blankAll();
    document.getElementById('cardTools').innerHTML = /*html*/`
        <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br />Vi skal bruke noen <i>extensions</i>:
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
            </ul>        
        </div>
    `;
}

function showHtml() {
    blankAll();
    document.getElementById('cardHtml').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showCss() {
    blankAll();
    document.getElementById('cardCss').innerHTML = /*html*/`
        <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                </li>
            </ul>
        </div>
    `;
}

function showJavaScript() {
    blankAll();
    document.getElementById('cardJavaScript').innerHTML = /*html*/`
        <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a></li>
            
            </ul>
        </div>
        `;
}

function showBodyGame() {
    blankAll();
    document.getElementById('cardGame').innerHTML = /*html*/`    
        <div id="head" class="bodyPart"></div>
        <div id="body" class="bodyPart"></div>
        <div id="legs" class="bodyPart"></div>
    `;
    selectHead1();
    selectBody1();
    selectLegs1();
}

function blankAll() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardCss').innerHTML = '';
    document.getElementById('cardHtml').innerHTML = '';
    document.getElementById('cardJavaScript').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}

function selectHead1() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead4()">◀</button>
        <img src="img/head1.png" />
        <button onclick="selectHead2()">▶</button>
    `;
}

function selectHead2() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead1()">◀</button>
        <img src="img/head2.png" />
        <button onclick="selectHead3()">▶</button>
    `;
}

function selectHead3() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead2()">◀</button>
        <img src="img/head3.png" />
        <button onclick="selectHead4()">▶</button>
    `;
}

function selectHead4() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead3()">◀</button>
        <img src="img/head4.png" />
        <button onclick="selectHead1()">▶</button>
    `;
}

function selectBody1() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody4()">◀</button>
        <img src="img/body1.png" />
        <button onclick="selectBody2()">▶</button>
    `;
}

function selectBody2() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody1()">◀</button>
        <img src="img/body2.png" />
        <button onclick="selectBody3()">▶</button>
    `;
}

function selectBody3() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody2()">◀</button>
        <img src="img/body3.png" />
        <button onclick="selectBody4()">▶</button>
    `;
}

function selectBody4() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody3()">◀</button>
        <img src="img/body4.png" />
        <button onclick="selectBody1()">▶</button>
    `;
}

function selectLegs1() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs4()">◀</button>
        <img src="img/legs1.png" />
        <button onclick="selectLegs2()">▶</button>
    `;
}

function selectLegs2() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs1()">◀</button>
        <img src="img/legs2.png" />
        <button onclick="selectLegs3()">▶</button>
    `;
}

function selectLegs3() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs2()">◀</button>
        <img src="img/legs3.png" />
        <button onclick="selectLegs4()">▶</button>
    `;
}

function selectLegs4() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs3()">◀</button>
        <img src="img/legs4.png" />
        <button onclick="selectLegs1()">▶</button>
    `;
}