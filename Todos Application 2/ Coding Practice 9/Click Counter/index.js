let counterValueEl = document.getElementById('counterValue');

let clickCount = localStorage.getItem('clickCount');

if (clickCount === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;
}

function onIncrementCount() {
    let perviousCounterValue = counterValueEl.textContent;
    let updateCounterValue = parseInt(perviousCounterValue) + 1

    let storage = localStorage.setItem('clickCount', updateCounterValue);
    counterValueEl.textContent = updateCounterValue
}