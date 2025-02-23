let aboutButtonEl = document.getElementById('aboutButton');
let timeToVisitButtonEl = document.getElementById('timeToVisitButton');
let attractionsButtonEl = document.getElementById('attractionsButton');

let aboutTab = document.getElementById('aboutTab');
let timeToVisitTab = document.getElementById('timeToVisitTab');
let attractionsTab = document.getElementById('attractionsTab');

timeToVisitTab.classList.add('d-none');
attractionsTab.classList.add('d-none');

function onClickAboutTab() {
    aboutTab.classList.remove('d-none');
    timeToVisitTab.classList.add('d-none');
    attractionsTab.classList.add('d-none');

    aboutButtonEl.classList.add('selected-button');
    timeToVisitButtonEl.classList.remove('selected-button')
    attractionsTab.classList.remove('selected-button');
}

function onClickTimeToVisit() {
    aboutTab.classList.add('d-none');
    timeToVisitTab.classList.remove('d-none');
    attractionsTab.classList.add('d-none');

    aboutButtonEl.classList.remove('selected-button');
    timeToVisitButtonEl.classList.add('selected-button')
    attractionsTab.classList.remove('selected-button');
}

function onClickAttractionTab() {
    aboutTab.classList.add('d-none');
    timeToVisitTab.classList.add('d-none');
    attractionsTab.classList.remove('d-none');

    aboutButtonEl.classList.remove('selected-button');
    timeToVisitButtonEl.classList.remove('selected-button')
    attractionsTab.classList.add('selected-button');
}