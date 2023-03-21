
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function updateScore() {
  const scoreElement = document.querySelector("#score");
  scoreElement.textContent = "Score: Player " + playerScore + ", Computer " + computerScore;
}

function game() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) =>
    button.addEventListener("click", function (e) {
      const playerSelection = e.target.id;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      const resultElement = document.querySelector("#result");
      resultElement.textContent = result;
      updateScore();
    })
  );
}

game();