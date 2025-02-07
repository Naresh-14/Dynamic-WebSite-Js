let imageElement = document.getElementById("image");
let imagewidthEl = document.getElementById("imageWidth");
let warningMessageEl = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidthWarningMsg = "Too big. Decrease the size of the Image.";
let minWidthWarningMsg = "Can't Visible. Increase the size of the Image."

imageElement.style.width = originalImageWidth + "px";
imagewidthEl.textContent = originalImageWidth  + "px";

function onIncrement(){
    if (originalImageWidth >= imageMaxWidth){
        warningMessageEl.textContent = maxWidthWarningMsg;
    }else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";
        
        warningMessageEl.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imagewidthEl.textContent =updatedImageWidth;
    }
}

function onDecrement() {
    if (originalImageWidth <= imageMinWidth){
        warningMessageEl.textContent = minWidthWarningMsg;
    }else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";
        
        warningMessageEl.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imagewidthEl.textContent =updatedImageWidth;
    }
}