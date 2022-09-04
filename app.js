let playerScore = 0;
let computerScore = 0;
let numberOfWinningRounds = 5;

function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    if (playerScore >= numberOfWinningRounds || computerScore >= numberOfWinningRounds) {
        endGame();
    }
}

function updateComputerChoice(choice) {
    document.getElementById('computer-choice').textContent = choice;;
}

function updateStatus(status) {
    document.getElementById('status').textContent = status;
}

function updateRoundResultColor(result) {
    const roundResult = document.querySelector(".round-result");
    const playerSpan = document.getElementById('player-score');
    const computerSpan = document.getElementById('computer-score');
    computerSpan.style.cssText = "transform: scale(1);";
    playerSpan.style.cssText = "transform: scale(1);";
    switch (result) {
        case 1:
            playerSpan.style.cssText = "transform: scale(1.5);";
            roundResult.style.cssText = 'border: .4rem solid green; \
                                        box-shadow: 0 0 1rem green;';
            break;
        case -1:
            computerSpan.style.cssText = "transform: scale(1.5);";
            roundResult.style.cssText = 'border: .4rem solid red; \
                                        box-shadow: 0 0 1rem red;';
            break;
        case 0:
            playerSpan.style.cssText = "transform: scale(1.5);";
            computerSpan.style.cssText = "transform: scale(1.5);";
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

function choiceButtonsEventListenerFunction(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    updateComputerChoice(`The computer chose: ${computerSelection}!`);
    updateRoundResultColor(roundResult);
    switch (roundResult) {
        case -1:
            computerScore++;
            updateStatus(`You LOSE! ${computerSelection} beats ${playerSelection}!`);
            updateScore();
            break;
        case 0:
            playerScore++;
            computerScore++;
            updateStatus(`TIE!`)
            updateScore();
            break;
        case 1:
            playerScore++;
            updateStatus(`You WIN! ${playerSelection} beats ${computerSelection}!`);
            updateScore();
            break;
    }
}

function addChoiceButtonsEvents() {
    const choiceButtons = Array.from(document.getElementsByClassName("choice-button"));
    choiceButtons.forEach(button => button.addEventListener('click', choiceButtonsEventListenerFunction));
}

function removeChoiceButtonsEvents() {
    const choiceButtons = Array.from(document.getElementsByClassName("choice-button"));
    choiceButtons.forEach(button => button.removeEventListener('click', choiceButtonsEventListenerFunction));
}

function updateSubtitle(text) {
    subtitle = document.getElementById("subtitle").textContent = text;
}

function play() {
    playerScore = 0;
    computerScore = 0;
    numberOfWinningRounds = 5;
    updateSubtitle(`First to win ${numberOfWinningRounds} rounds, wins the game!`);
    updateRoundResultColor(undefined);
    updateScore(undefined);
    updateComputerChoice("The computer is");
    updateStatus("waiting for your move...");
    addChoiceButtonsEvents();
}

function endGame() {
    removeChoiceButtonsEvents();
    if (playerScore > computerScore) {
        updateSubtitle("Game over! You WON!");
        subtitle = document.getElementById("subtitle").style.color = "green";
    }
    else if (computerScore > playerScore) {
        updateSubtitle("Game over! You LOST!");
        subtitle = document.getElementById("subtitle").style.color = "red";
    }
    else {
        updateSubtitle("Game over! It's a TIE!");
        subtitle = document.getElementById("subtitle").style.color = "gold";
    }
    // refresh button
    const title = document.getElementById("title");
    title.textContent = "CLICK HERE TO PLAY AGAIN!";
    title.style.color = "goldenrod";
    title.href = "javascript:window.location.href=window.location.href";
}

play();