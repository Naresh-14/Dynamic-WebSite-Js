let userInputEl = document.getElementById('userInput');
let keyCodeListEl = document.getElementById('keyCodeList');


function createAndAppendkeydown(keyCode) {
    let listItem = document.createElement('li');
    listItem.classList.add('mt-1');
    listItem.textContent = keyCode;
    keyCodeListEl.appendChild(listItem);
}


function onkeydown(event) {
    createAndAppendkeydown(event.keyCode);
}


userInputEl.addEventListener("keydown", onkeydown)