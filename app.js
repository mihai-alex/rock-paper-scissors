function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
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
}

//TODO: break this big "game" function into smaller functions (single responsibility)
//TODO: add input validation
//TODO: declare often used strings as global constants
function game() {
    const numRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    console.log(`The score is: ${playerWins} - ${computerWins} (player - computer)`);
    for (let round = 1; round <= numRounds; round++) {
        console.log(`Round ${round}:`);
        let playerSelection = prompt("Choose between: rock, paper, scissors");
        let computerSelection = getComputerChoice();
        console.log("The computer chose: " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("WIN")) {
            playerWins++;
        }
        else if(roundResult.includes("LOSE")) {
            computerWins++;
        }
        else {
            playerWins++;
            computerWins++;
        }
        console.log(`The score is: ${playerWins} - ${computerWins} (player - computer)`);
    }
    if (playerWins == computerWins) {
        console.log("The game finished in a TIE.");
    }
    else if (playerWins < computerWins) {
        console.log("YOU LOST the game.");
    }
    else {
        console.log("YOU WON the game!");
    }
}