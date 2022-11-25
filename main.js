console.log("---------Welcome to Rock Paper Scissors Game------");

const choices = ["Rock", "Paper", "Scissor"]; // @global to use it in every function
const playerSelection = "scissor";

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let message;
    if (computerSelection == playerSelection) {
        message = "It's okay no one won -,-";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        message = `You Lose! ${capitalize(
            computerSelection
        )} beats ${capitalize(playerSelection)}`;
    } else {
        message = `You Win! ${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
        )}`;
    }
    return message;
}
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), prompt("choose")));
    }
}

game();
/*
 *HElpers
 */

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
