let hoursInputEl = document.getElementById('hoursInput');
let minutesInputEl = document.getElementById('minutesInput');
let convertBtn = document.getElementById('convertBtn');
let timeInSecondsEl = document.getElementById('timeInSeconds');
let errorMsgEl = document.getElementById('errorMsg')



convertBtn.addEventListener('click', function() {
    let hoursInput = hoursInputEl.value;
    let minutesInput = minutesInputEl.value;

    let hours = parseInt(hoursInput);
    let minutes = parseInt(minutesInput);

    let timeInSeconds = hours * 3600 + minutes * 60;

    if (hoursInput === '') {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        errorMsgEl.classList.add('time-color');
    } else if (minutesInput === '') {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        errorMsgEl.classList.add('time-color');
    } else {
        timeInSecondsEl.textContent = timeInSeconds + "s";
        timeInSecondsEl.classList.add('time')
    }
})