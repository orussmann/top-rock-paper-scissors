function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choicesIndex = Math.round(Math.random() * 2);
    return choices[choicesIndex];
}

/* TODO:
    - check for unexpected/ incorrect input, like a number or a word that's not a defined choice
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    computerSelection = String(computerSelection).toLowerCase();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} can't beat ${playerSelection}`;
    } else if (playerSelection === rock && computerSelection === scissors
        || playerSelection === paper && computerSelection === rock
        || playerSelection === scissors && computerSelection === paper) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}


// TODO: When Input is Empty string, user shouldnt automatically lose.
function game() {
    for (let i = 0; i < 5 ; i++) {
        console.log(playRound(prompt("Enter one of the options: Rock, Paper or Scissors."), getComputerChoice()));
    }
}

game();

