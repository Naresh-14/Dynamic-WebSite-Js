let bgContainerEl = document.getElementById('bgContainer');
let headingEl = document.getElementById('heading');
let themeUserInputEl = document.getElementById('themeUserInput');

let lightTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function changeTheme(event) {
    if (event.key === 'Enter') {
        let themeUserVal = themeUserInputEl.value;
        if (themeUserVal === "light") {
            bgContainerEl.style.backgroundImage = lightTheme;
            headingEl.style.color = "#o14d40";
        } else if (themeUserVal === 'dark') {
            bgContainerEl.style.backgroundImage = darkTheme;
            headingEl.style.color = "#ffffff";
        } else {
            alert("Enter the valid Theme");
        }
    }
}




themeUserInputEl.addEventListener("keydown", changeTheme);