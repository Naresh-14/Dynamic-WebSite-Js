
let movieEl = document.getElementById("titleInput");
let reviewEl = document.getElementById("reviewTextarea");

let reviewContainer = document.getElementById("reviewsContainer");

function onAddReview() {
    let movieInputEl = movieEl.value;
    let reviewInputEl = reviewEl.value;

    if (movieInputEl === "") {
        alert("Please enter a movie title");
        return;
    }

    let headingElement = document.createElement("h1");
    headingElement.classList.add("review-input");
    headingElement.textContent = "Movie Title: " + movieInputEl;
    reviewContainer.appendChild(headingElement);

    let reviewElement = document.createElement("p");
    reviewElement.textContent = "Review: " + reviewInputEl;
    reviewElement.classList.add("review-textarea");
    reviewContainer.appendChild(reviewElement);

    movieInputEl.value = "";
    reviewInputEl.value = "";
}