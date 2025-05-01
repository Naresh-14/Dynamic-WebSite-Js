let checkboxWithLabelContainerEl = document.getElementById('checkboxWithLabelContainer');

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
inputElement.classList.add("checkbox-input");
checkboxWithLabelContainerEl.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.classList.add("checkbox-label");
labelElement.textContent = "Click Me!";
labelElement.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelElement);