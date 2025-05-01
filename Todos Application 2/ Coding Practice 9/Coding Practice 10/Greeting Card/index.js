let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parseGreeting = JSON.parse(greeting);

let para1 = document.getElementById("para1");
para1.textContent = "From:" + parseGreeting.from;
let para2 = document.getElementById("para2");
para2.textContent = "TO:" + parseGreeting.to;




let para3 = document.getElementById("para3");
para3.textContent = parseGreeting.greetText;