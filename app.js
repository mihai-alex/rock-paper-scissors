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
        console.log("The computer chose: " + computerSelection);
        switch (roundResult) {
            case -1:
                console.log(`You LOSE! ${computerSelection} beats ${playerSelection}!`);
                break;
            case 0:
                console.log(`TIE!`)
                break;
            case 1:
                console.log(`You WIN! ${playerSelection} beats ${computerSelection}!`);
                break;
        }
    }));
}

function play() {
    addChoiceButtonsEvents();

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
}

play();