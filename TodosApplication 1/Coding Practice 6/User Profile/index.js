let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};


let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("d-flex", "flex-column", "justify-content-center", "text-center")


let imgContainerEl = document.getElementById('imgContainer');
profileContainerEl.appendChild(imgContainerEl);


let imgEl = document.createElement("img");
imgEl.classList.add("image");
imgEl.src = profileDetails.imgSrc;

imgContainerEl.appendChild(imgEl);

let nameEl = document.createElement("p");
nameEl.textContent = "RAHUL ATTULURI";
nameEl.classList.add("name", "pt-3");
imgContainerEl.appendChild(nameEl);


let ageEl = document.createElement("p");
ageEl.textContent = "Age : 25";
ageEl.classList.add("age");

imgContainerEl.appendChild(ageEl);