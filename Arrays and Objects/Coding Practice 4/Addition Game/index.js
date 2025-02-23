let first_number = document.getElementById("first_number");
let second_number = document.getElementById("second_number");
let user_input = document.getElementById("user_input");
let game_result = document.getElementById("game_result");

//first_number.textContent = first_number1;
//second_number.textContent = second_number1;

let result = "Congratulations ! You got it right...";
let tryAgain = "Try again...";

function check_button() {
    let f = parseInt(first_number.textContent);
    let s = parseInt(second_number.textContent);
    let i = parseInt(user_input.value);
    if ((s + f) === i) {
        game_result.textContent = result;
        game_result.style.color = "blue";
    } else {
        game_result.textContent = tryAgain;
        game_result.style.color = "blue";
    }
}


function restart() {
    let first_number1 = Math.ceil(Math.random() * 100);
    let second_number1 = Math.ceil(Math.random() * 100);

    first_number.textContent = first_number1;
    second_number.textContent = second_number1;
    user_input.value = '';
    game_result.textContent = "";

}
restart()