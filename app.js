function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function validatePlayerChoice(playerSelection) {
    if (playerSelection === null || playerSelection === undefined) {
        return playerSelection;
    }
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    }
    return undefined;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "TIE!";
        }
        if (computerSelection === "paper") {
            return "YOU LOSE! Paper beats rock.";
        }
        if (computerSelection === "scissors") {
            return "YOU WIN! Rock beats scissors.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "YOU WIN! Paper beats rock.";
        }
        if (computerSelection === "paper") {
            return "TIE!";
        }
        if (computerSelection === "scissors") {
            return "YOU LOSE! Scissors beats paper.";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "YOU LOSE! Rock beats scissors."
        }
        if (computerSelection === "paper") {
            return "YOU WIN! Scissors beats paper."
        }
        if (computerSelection === "scissors") {
            return "TIE!";
        }
    }
}

function play() {
    const numRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    console.log("Rock, paper, scissors, GO!!!")
    for (let round = 1; round <= numRounds; round++) {
        console.log(`Round ${round}:`);
        console.log(`The score is: ${playerWins} - ${computerWins} (player - computer)`);

        let playerSelection = prompt("Choose between: rock, paper, scissors");
        playerSelection = validatePlayerChoice(playerSelection);
        if (playerSelection === undefined) {
            console.log("The entered choice is not valid! Choose between: rock, paper, scissors");
            round--;
            continue;
        }
        if (playerSelection === null) {
            console.log("You have exited the game. Call play(); to play again!");
            return;
        }

        let computerSelection = getComputerChoice();
        console.log("The computer chose: " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("WIN")) {
            playerWins++;
        }
        else if (roundResult.includes("LOSE")) {
            computerWins++;
        }
        else {
            playerWins++;
            computerWins++;
        }
    }
    console.log(`The score is: ${playerWins} - ${computerWins} (player - computer)`);
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

console.log("Call play(); to start playing!")