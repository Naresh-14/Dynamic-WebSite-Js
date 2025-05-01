let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeTittle = document.getElementById("recipeTittle");
recipeTittle.textContent = recipeObj.title;

let img = document.getElementById("img");
img.setAttribute("src", recipeObj.imgSrc);

let unorderList = document.getElementById("unorderList");

for (let item of recipeObj.ingredients) {
    let listItems = document.createElement("li");
    listItems.textContent = item;
    listItems.classList.add("ingredientStyle");
    unorderList.appendChild(listItems);
}