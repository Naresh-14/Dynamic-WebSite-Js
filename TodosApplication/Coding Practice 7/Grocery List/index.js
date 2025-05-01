let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];


let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("bg-container");

let groceryTittleEl = document.createElement("h1");
groceryTittleEl.textContent = "Grocery List";
groceryTittleEl.classList.add("grocery-tittle");
groceryListContainerEl.appendChild(groceryTittleEl);

let groceryItemsContainer = document.createElement("ul");
groceryItemsContainer.classList.add("grocery-Items-container");
groceryListContainerEl.appendChild(groceryItemsContainer);

for (let item of groceryList) {
    let groceryItem = document.createElement("li");
    groceryItem.textContent = item;
    groceryItem.classList.add("grocery-item");
    groceryItemsContainer.appendChild(groceryItem);
}