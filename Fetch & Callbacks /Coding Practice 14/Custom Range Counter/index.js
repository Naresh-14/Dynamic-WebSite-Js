let fromUserInputEl = document.getElementById('fromUserInput');
let toUserInputEl = document.getElementById('toUserInput');
let counterTextEl = document.getElementById('counterText');

function displayCounter(fromCount, toCount) {
    let currentCount = fromCount;

    let timerId = setInterval(function() {
        if (currentCount < toCount) {
            currentCount += 1;
            counterTextEl.textContent = currentCount;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}




function onStartBtn() {
    let fromInputVal = fromUserInputEl.value;
    let toInputVal = toUserInputEl.value;

    if (fromInputVal === '') {
        alert("Enter the from value");
    } else if (toInputVal === '') {
        alert("Enter the to value");
    } else {
        let fromVal = parseInt(fromInputVal);
        let toVal = parseInt(toInputVal);

        displayCounter(fromVal, toVal);
    }
}