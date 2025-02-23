let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainerEl = document.getElementById('bgContainer');

bgContainerEl.style.backgroundColor = bgColorsArray[0];

function onclickBgColor() {
    let numberOfBgColor = bgColorsArray.length;
    let randomOfBgColorIndex = Math.ceil(Math.random() * numberOfBgColor);

    if (randomOfBgColorIndex === numberOfBgColor) {
        randomOfBgColorIndex = numberOfBgColor - 1;
    }
    let randomOfBgColor = bgColorsArray[randomOfBgColorIndex];
    bgContainerEl.style.backgroundColor = randomOfBgColor;
}