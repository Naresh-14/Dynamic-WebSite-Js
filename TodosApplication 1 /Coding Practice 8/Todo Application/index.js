let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        unique: 1
    },
    {
        text: "Learn CSS",
        unique: 2
    },
    {
        text: "Learn JavaScript",
        unique: 3
    }
];

let addTodoButton = document.getElementById("addTodoButton");


function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");
}

function onTodoDelete(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.unique;
    let checkboxId = "checkbox" + todo.unique;
    let labelId = "label" + todo.unique;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onTodoDelete(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let todoUserInputEl = document.getElementById("todoUserInput");
    let userInputValue = todoUserInputEl.value;
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    let count = todoList.length;
    count = count + 1;

    newTodo = {
        text: userInputValue,
        unique: count
    }


    createAndAppendTodo(newTodo);

    userInputValue.value = "";
}


addTodoButton.onclick = function() {
    onAddTodo()
}