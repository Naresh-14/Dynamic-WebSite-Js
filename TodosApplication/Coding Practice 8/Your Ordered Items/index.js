let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];


let itemListContainerEl = document.getElementById("itemListContainer");

function onOrderedCancelStatus(itemId) {
let orderedContainer = document.getElementById(itemId);
itemListContainerEl.removeChild(orderedContainer);
}

function createAndAppendOrdered(item) {

let itemId = "item" + item.uniqueNo;
let orderId = 'order' + item.uniqueNo;
let button = "button" + item.uniqueNo;


let orderedContainer = document.createElement("li");
orderedContainer.classList.add("d-flex", "flex-row");
orderedContainer.id = itemId;
itemListContainerEl.appendChild(orderedContainer);

let orderItemContainer = document.createElement("div");
orderItemContainer.classList.add("d-flex", "flex-row", "mt-3");
orderedContainer.appendChild(orderItemContainer);

let itemElement = document.createElement("h1");
itemElement.textContent = item.itemName;
itemElement.id = orderId;
itemElement.classList.add("name", "mt-2", "mr-4");
orderItemContainer.appendChild(itemElement);

let buttonElement = document.createElement("button");
buttonElement.textContent = "cancel";
buttonElement.id = button;
buttonElement.classList.add("btn", "btn-danger");
buttonElement.onclick = function() {
    onOrderedCancelStatus(itemId);
}
orderItemContainer.appendChild(buttonElement);

}


for (let item of itemList) {
createAndAppendOrdered(item);
}