let stopbuttonEl = document.getElementById('stopButton');
let readybuttonEl = document.getElementById('readyButton');
let gobuttonEl = document.getElementById('goButton');

let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");

function turnOnRed() {
    stopbuttonEl.style.backgroundColor = "#cf1124";
    readybuttonEl.style.backgroundColor = "#1f1d41";
    gobuttonEl.style.backgroundColor = "#1f1d41";

    stopLightEl.style.backgroundColor = "#cf1124";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
}

function turnOnYellow() {
    stopbuttonEl.style.backgroundColor = "#1f1d41";
    readybuttonEl.style.backgroundColor = "#f7c948";
    gobuttonEl.style.backgroundColor = "#1f1d41";

    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "#f7c948";
    goLightEl.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    stopbuttonEl.style.backgroundColor = "#1f1d41";
    readybuttonEl.style.backgroundColor = "#1f1d41";
    gobuttonEl.style.backgroundColor = "#199473";

    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#199473";
}