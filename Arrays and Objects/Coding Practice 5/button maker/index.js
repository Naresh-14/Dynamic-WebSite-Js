let bgColorInputEl = document.getElementById('bgColorInput');
let fontColorInputEl = document.getElementById('fontColorInput');
let fontSizeInputEl = document.getElementById('fontSizeInput');
let fontWeightInputEl = document.getElementById('fontWeightInput');
let paddingInputEl = document.getElementById('paddingInput');
let borderRadiusInputEl = document.getElementById('borderRadiusInput');
let customButtoneEl = document.getElementById('customButton');

function onApplyButton() {
    let bgColorInputValue = bgColorInputEl.value;
    let fontColorInputValue = fontColorInputEl.value;
    let fontSizeInputValue = fontSizeInputEl.value;
    let fontWeightInputValue = fontWeightInputEl.value;
    let paddingInputValue = paddingInputEl.value;
    let borderRadiusInputValue = borderRadiusInputEl.value;


    customButtoneEl.style.backgroundColor = bgColorInputValue;
    customButtoneEl.style.color = fontColorInputValue;
    customButtoneEl.style.fontSize = fontSizeInputValue;
    customButtoneEl.style.fontWeight = fontWeightInputValue;
    customButtoneEl.style.padding = paddingInputValue;
    customButtoneEl.style.borderRadius = borderRadiusInputValue;
}