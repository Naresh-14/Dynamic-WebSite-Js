let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let errorMsgEl = document.getElementById("errorMsg");
let userInputEl = document.getElementById('userInput');
let wordsConatinerEl = document.getElementById('wordsConatiner');


function createAndAddWordToWordCloud(word) {
    let randomWordsInputValue = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomWordsInputValue;
    wordEl.classList.add("m-3");
    wordsConatinerEl.appendChild(wordEl);
}
for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}



function onAddBtnWords() {
    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = '';
        createAndAddWordToWordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = "Please enter a word";
    }
}