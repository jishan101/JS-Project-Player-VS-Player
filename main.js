const formElm = document.querySelector("form");
const inputScoreElm = document.querySelector("#inputScore");
const winScoreElm = document.querySelector("#w");
const p1ButtonElm = document.querySelector("#p1Btn");
const p2ButtonElm = document.querySelector("#p2Btn");
const p1ScoreElm = document.querySelector("#p1Score");
const p2ScoreElm = document.querySelector("#p2Score");
const resetButtonElm = document.querySelector("#resetBtn");

let winScore = 0;
let p1Score = 0;
let p2Score = 0;
let turn = "";

formElm.addEventListener("submit", e => {
    e.preventDefault();
    invalid();
    winScore = Number(inputScoreElm.value);
    winScoreElm.textContent = winScore;
    valid();
    p1Score = 0;
    p1ScoreElm.textContent = p1Score;
    p2Score = 0;
    p2ScoreElm.textContent = p2Score;
    inputScoreElm.value = "";
    if (document.querySelector(".winner")) {
        document.querySelector(".winner").remove();
    }
});

p1ButtonElm.addEventListener("click", e => {
    p1Score += random(winScore);
    p1ScoreElm.textContent = p1Score;
    p1ButtonElm.setAttribute("disabled", "disabled");
    p2ButtonElm.removeAttribute("disabled");
    winner();
});

p2ButtonElm.addEventListener("click", e => {
    p2Score += random(winScore);
    p2ScoreElm.textContent = p2Score;
    p2ButtonElm.setAttribute("disabled", "disabled");
    p1ButtonElm.removeAttribute("disabled");
    winner();
});

resetButtonElm.addEventListener("click", e => {
    winScore = 0;
    winScoreElm.textContent = winScore;
    p1Score = 0;
    p1ScoreElm.textContent = p1Score;
    p2Score = 0;
    p2ScoreElm.textContent = p2Score;
    if (document.querySelector(".invalid")) {
        document.querySelector(".invalid").remove();
    }
    if (document.querySelector(".winner")) {
        document.querySelector(".winner").remove();
    }
})

function invalid() {
    if (inputScoreElm.value === "" || inputScoreElm.value < 1) {
        if (!document.querySelector(".invalid")) {
            formElm.insertAdjacentHTML("beforebegin", "<p class = 'invalid'>Please enter a valid number!</p>");
        }
    }
}

function valid() {
    if (inputScoreElm.value >= 1) {
        if (document.querySelector(".invalid")) {
            document.querySelector(".invalid").remove();
        }
        p1ButtonElm.removeAttribute("disabled");
        p2ButtonElm.removeAttribute("disabled");
    }
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function winner() {
    if (p1Score >= winScore) {
        formElm.insertAdjacentHTML("beforebegin", "<h4><p class = 'winner'>Player 1 is the winner!</p></h4>");
        p1ButtonElm.setAttribute("disabled", "disabled");
        p2ButtonElm.setAttribute("disabled", "disabled");
    } else if (p2Score >= winScore) {
        formElm.insertAdjacentHTML("beforebegin", "<h4><p class = 'winner'>Player 2 is the winner!</p></h4>");
        p1ButtonElm.setAttribute("disabled", "disabled");
        p2ButtonElm.setAttribute("disabled", "disabled");
    }
}
