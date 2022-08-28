function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "TIE!";
        }
        if (computerSelection == "paper") {
            return "YOU LOSE! Paper beats rock.";
        }
        if (computerSelection == "scissors") {
            return "YOU WIN! Rock beats scissors.";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "YOU WIN! Paper beats rock.";
        }
        if (computerSelection == "paper") {
            return "TIE!";
        }
        if (computerSelection == "scissors") {
            return "YOU LOSE! Scissors beats paper.";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "YOU LOSE! Rock beats scissors."
        }
        if (computerSelection == "paper") {
            return "YOU WIN! Scissors beats paper."
        }
        if (computerSelection == "scissors") {
            return "TIE!";
        }
    }
    return "The entered move is not valid! Choose between: rock, paper, scissors";
}