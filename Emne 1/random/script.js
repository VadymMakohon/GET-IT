const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}


function randomColor() {
    const red = Math.random(Math.random) * 255
    const green = Math.random(Math.random) * 255
    const blue = Math.random(Math.random) * 255

    const color = `rgb(${red}, ${green}, ${blue})`
}