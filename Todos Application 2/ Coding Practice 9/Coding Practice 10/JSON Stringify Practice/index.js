let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let jsonContainer = document.getElementById("jsonContainer");

let bikesStringify = JSON.stringify(bikes);
console.log(bikesStringify);
let container = document.createElement("div");
container.classList.add("json-container");
document.body.appendChild(container);
let para1 = document.createElement("p");
para1.textContent = bikesStringify;
jsonContainer.appendChild(para1);

let personStringigy = JSON.stringify(person);
console.log(personStringigy);
let para2 = document.createElement("p");
para2.textContent = personStringigy;
jsonContainer.appendChild(para2);

let todoStringify = JSON.stringify(todos);
console.log(todoStringify);
let para3 = document.createElement("p");
para3.textContent = todoStringify;
jsonContainer.appendChild(para3);