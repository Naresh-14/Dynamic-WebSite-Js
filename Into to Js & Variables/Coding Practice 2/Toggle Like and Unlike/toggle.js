let puppyImgEl = document.getElementById('puppyImage');
let likeIconEl = document.getElementById("likeIcon");
let likeButtonEl = document.getElementById("likeButton");

let isImgLiked = false;

function onClickLikeButton() {
    if (isImgLiked === false) {
        puppyImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.style.color = "#0967d2";
        likeButtonEl.style.backgroundColor = "#0967d2";
        likeButtonEl.style.color = "#fff";
        isImgLiked = true;
    } else {
        puppyImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.style.color = "#cbd2d9";
        likeButtonEl.style.backgroundColor = "#cbd2d9";
        likeButtonEl.style.color = "#9aa5b1";
        isImgLiked = false;
    }
}