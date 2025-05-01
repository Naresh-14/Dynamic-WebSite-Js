let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");

let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onTodoStatusChange() {
    labelElement.classList.toggle("checked");
}

let todoItemsContainerEl = document.createElement("ul");
todoItemsContainerEl.classList.add("todos-items-container", "d-flex", "flex-row");
checkBoxWithLabelContainerEl.appendChild(todoItemsContainerEl);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.classList.add("checkbox-input");
inputElement.onclick = function() {
    onTodoStatusChange();
}
todoItemsContainerEl.appendChild(inputElement);


let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.classList.add("checkbox-label");
labelElement.textContent = "I am a label";
labelElement.id = labelId;
todoItemsContainerEl.appendChild(labelElement);