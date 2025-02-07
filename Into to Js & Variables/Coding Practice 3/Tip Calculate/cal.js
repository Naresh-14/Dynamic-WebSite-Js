let billAmountInput = document.getElementById("billAmount");
let percentageInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById('tipAmount');
let totalInput = document.getElementById('totalAmount');
let errorMessage = document.getElementById('errorMessage');
let errorMsg = "Please Enter a Valid Input";


function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageInputValue = percentageInput.value;

    if (billAmountInputValue === "") {
        errorMessage.textContent = errorMsg;
    } else if (percentageInputValue === "") {
        errorMessage.textContent = errorMsg;
    } else {
        errorMessage.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageInputValue);

        let calculateTip = (percentageTip / 100) * billAmount;
        let calculateTotal = billAmount + calculateTip;
        tipAmountInput.value = calculateTip;
        totalInput.value = calculateTotal;
    }
}