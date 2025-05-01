let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById('startIndexInput');
let deleteCountInput = document.getElementById('deleteCountInput');
let itemToAddInput = document.getElementById('itemToAddInput');
let spliceBtn = document.getElementById('spliceBtn');
let updatedArray = document.getElementById('updatedArray');

function converToJSONStringToAddAndAppend() {
    let stringifedArr = JSON.stringify(arr);
    updatedArray.textContent = stringifedArr;
}
converToJSONStringToAddAndAppend()

spliceBtn.onclick = function spliceArray() {
    let startIndex = startIndexInput.value;
    let deleteCount = deleteCountInput.value;
    let itemToAdd = itemToAddInput.value;

    if (startIndex === '') {
        alert("Please enter start Index");
        return;
    }

    if (deleteCount === '') {
        deleteCount = 0;
    }

    if (itemToAdd === '') {
        arr.splice(parseInt(startIndex), parseInt(deleteCount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }

    startIndexInput.value = '';
    deleteCountInput.value = '';
    itemToAddInput.value = '';
    converToJSONStringToAddAndAppend()
}