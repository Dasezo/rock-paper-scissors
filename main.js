console.log("---------Welcome to Dasezo's | Rock Paper Scissors Game------");
/*@global vars to use  in every function */
const choices = ["Rock", "Paper", "Scissor"];
const numberOfRounds = 5;
let userScoreValue = 0;
let ghostScoreValue = 0;
let roundWinner = "";
let messageText = "";

/* Load UI elements */
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const userScore = document.getElementById("user-score");
const ghostScore = document.getElementById("ghost-score");
const userIcon = document.getElementById("user-icon");
const ghostIcon = document.getElementById("ghost-icon");
const scissorBtn = document.getElementById("scissor-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const resultModal = document.getElementById("result-modal");
const resultMsg = document.getElementById("result-msg");
const finaleScore = document.getElementById("finale-score");
const restartBtn = document.getElementById("restart-btn");
const overlay = document.getElementById("overlay");

/* Add Listeners */
rockBtn.addEventListener("click", () => game("rock"));
scissorBtn.addEventListener("click", () => game("scissor"));
paperBtn.addEventListener("click", () => game("paper"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeResultModal);

function game(userSelection) {
    if (isGameOver()) {
        displayResultModal();
        return;
    }
    const ghostSelection = getGhostChoice();
    playRound(ghostSelection, userSelection);
    updateScore();
    updateIcons(ghostSelection, userSelection);

    if (isGameOver()) {
        displayResultModal();
        return;
    }
}

function playRound(ghostSelection, userSelection) {
    ghostSelection = ghostSelection.toLowerCase();
    userSelection = userSelection.toLowerCase();
    if (ghostSelection == userSelection) {
        roundWinner = "Tie !!:o";
        messageText = "It's okay no one won -,-";
    } else if (
        (ghostSelection == "rock" && userSelection == "scissor") ||
        (ghostSelection == "scissor" && userSelection == "paper") ||
        (ghostSelection == "paper" && userSelection == "rock")
    ) {
        roundWinner = "Ghost won it :'(";
        ghostScoreValue++;
        messageText = ` ${capitalize(ghostSelection)} beats ${capitalize(
            userSelection
        )}`;
    } else {
        roundWinner = "You won :D  ";
        userScoreValue++;
        messageText = `${capitalize(userSelection)} beats ${capitalize(
            ghostSelection
        )}`;
    }
}

/*
 * HElpers
 */
function getGhostChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function updateIcons(ghost, user) {
    switch (ghost.toLowerCase()) {
        case "rock":
            ghostIcon.innerHTML =
                '<i class="fa-solid fa-hand-back-fist animate__animated animate__bounceIn">';
            break;
        case "paper":
            ghostIcon.innerHTML =
                '<i class="fa-solid fa-hand animate__animated animate__bounceIn">';
            break;
        case "scissor":
            ghostIcon.innerHTML =
                '<i class="fa-solid fa-hand-scissors animate__animated animate__bounceIn">';
            break;
    }
    switch (user.toLowerCase()) {
        case "rock":
            userIcon.innerHTML =
                '<i class="fa-solid fa-hand-back-fist animate__animated animate__bounceIn">';
            break;
        case "paper":
            userIcon.innerHTML =
                '<i class="fa-solid fa-hand animate__animated animate__bounceIn">';
            break;
        case "scissor":
            userIcon.innerHTML =
                '<i class="fa-solid fa-hand-scissors animate__animated animate__bounceIn">';
            break;
    }
}

function updateScore() {
    ghostScore.innerText = ghostScoreValue;
    userScore.innerText = userScoreValue;
    message.innerText = roundWinner;
    hint.innerText = messageText;
}
function isGameOver() {
    return userScoreValue === 5 || ghostScoreValue === 5;
}

function restartGame() {
    ghostScoreValue = 0;
    userScoreValue = 0;
    roundWinner = "Choose Your Weapon";
    messageText =
        "First to reach 5 points (wins 5 rounds) & beat the Ghost :')";
    updateScore();
    userIcon.innerHTML =
        '<i class="fa-solid fa-user animate__animated animate__bounceIn">';
    ghostIcon.innerHTML =
        '<i class="fa-solid fa-ghost animate__animated animate__bounceIn">';
    closeResultModal();
}
function setResults() {
    resultMsg.innerText =
        userScoreValue > ghostScoreValue ? "Congrats! You Won" : "Oh, You Lost";
    finaleScore.innerText = `${userScoreValue} - ${ghostScoreValue} `;
}
function displayResultModal() {
    setResults();
    resultModal.classList.add("active");
    // resultModal.classList.add("animate__rubberBand");
    overlay.classList.add("active");
    resultMsg.classList.add("animate__tada");
}
function closeResultModal() {
    resultModal.classList.remove("active");
    resultModal.classList.remove("animate__zoomIn");
    overlay.classList.remove("active");
    resultMsg.classList.remove("animate__tada");
}
