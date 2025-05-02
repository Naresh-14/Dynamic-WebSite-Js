let twentySecondsBtn = document.getElementById('twentySecondsBtn');
let thirtySecondsBtn = document.getElementById('thirtySecondsBtn');
let fortySecondsBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');
let timerTextEl = document.getElementById('timerText');


let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPerviousTimers() {
    clearInterval(timerId);
}

twentySecondsBtn.onclick = function() {
    secondsLeft = 20;
    clearPerviousTimers();
    setTimerAndShow();
};
thirtySecondsBtn.onclick = function() {
    secondsLeft = 30;
    clearPerviousTimers();
    setTimerAndShow();
};

fortySecondsBtn.onclick = function() {
    secondsLeft = 40;
    clearPerviousTimers();
    setTimerAndShow();
};
oneMinuteBtn.onclick = function() {
    secondsLeft = 60;
    clearPerviousTimers();
    setTimerAndShow();
};

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds left";
    } else {
        clearPerviousTimers();
        timerTextEl.textContent = timerCompletedText;
    }
}