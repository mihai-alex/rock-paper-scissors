let playerScore = 0;
let computerScore = 0;

function updateScore() {
    const playerStatus = document.getElementById('player-score');
    playerStatus.textContent = playerScore;

    const computerStatus = document.getElementById('computer-score');
    computerStatus.textContent = computerScore;
}

function updateComputerChoice(choice) {
    const computerStatus = document.getElementById('computer-choice');
    computerStatus.textContent = choice;
}

function updateStatus(status) {
    const gameStatus = document.getElementById('status');
    gameStatus.textContent = status;
}

function updateRoundResultColor(result) {
    const roundResult = document.querySelector(".round-result");
    switch (result) {
        case 1:
            roundResult.style.cssText = 'border: .4rem solid green; \
                                        box-shadow: 0 0 1rem green;';
            break;
        case -1:
            roundResult.style.cssText = 'border: .4rem solid red; \
                                        box-shadow: 0 0 1rem red;';
            break;
        case 0:
            roundResult.style.cssText = 'border: .4rem solid yellow; \
                                        box-shadow: 0 0 1rem yellow;';
            break;
        default:
            roundResult.style.cssText = 'border: .4rem solid gray; \
            box-shadow: 0 0 1rem gray;';
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

/*
    The function return value for each of the 3 cases:
        -1, computer wins
         0, tie
         1, player wins
*/
function playRound(playerSelection, computerSelection) {
    const roundResult = document.querySelector(".round-result");
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return 0;
        }
        if (computerSelection === "paper") {
            return -1;
        }
        if (computerSelection === "scissors") {
            return 1;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1;
        }
        if (computerSelection === "paper") {
            return 0;
        }
        if (computerSelection === "scissors") {
            return -1;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return -1;
        }
        if (computerSelection === "paper") {
            return 1;
        }
        if (computerSelection === "scissors") {
            return 0;
        }
    }
}

function addChoiceButtonsEvents() {
    const choiceButtons = Array.from(document.getElementsByClassName("choice-button"));
    choiceButtons.forEach(button => button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        updateComputerChoice(`The computer chose: ${computerSelection}!`);
        updateRoundResultColor(roundResult);
        switch (roundResult) {
            case -1:
                computerScore++;
                updateScore();
                updateStatus(`You LOSE! ${computerSelection} beats ${playerSelection}!`);
                break;
            case 0:
                updateStatus(`TIE!`)
                break;
            case 1:
                playerScore++;
                updateScore();
                updateStatus(`You WIN! ${playerSelection} beats ${computerSelection}!`);
                break;
        }
    }));
}

function play() {
    // const numRounds = 5;
    // let numPlayerWins = 0;
    // let numComputerWins = 0;
    // console.log("Rock, paper, scissors, GO!!!")
    // for (let round = 1; round <= numRounds; round++) {
    //     console.log(`Round ${round}:`);
    //     console.log(`The score is: ${numPlayerWins} - ${numComputerWins} ` +
    //         `(player - computer)`);

    //     if (roundResult.includes("WIN")) {
    //         numPlayerWins++;
    //     }
    //     else if (roundResult.includes("LOSE")) {
    //         numComputerWins++;
    //     }
    //     else {
    //         numPlayerWins++;
    //         numComputerWins++;
    //     }
    // }
    // console.log(`The score is: ${numPlayerWins} - ${numComputerWins} ` +
    //     `(player - computer)`);
    // if (numPlayerWins == numComputerWins) {
    //     console.log("The game finished in a TIE.");
    // }
    // else if (numPlayerWins < numComputerWins) {
    //     console.log("YOU LOST the game.");
    // }
    // else {
    //     console.log("YOU WON the game!");
    // }

    playerScore = 0;
    computerScore = 0;
    updateScore(undefined);
    updateComputerChoice("The computer is");
    updateStatus("waiting for your move...");
    addChoiceButtonsEvents();
}

play();