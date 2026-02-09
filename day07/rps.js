/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
  console.log(
    "Getting started with the Rock 🪨, Paper 🧻, or Scissors ✂️ Game",
  );

  const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    default:
      computerChoice = "scissor";
      break;
  }

  console.log("User Selected:", userChoice);
  console.log("Computer Selected:", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("User win");
  } else if (userChoice === computerChoice) {
    console.log("The game is a tie");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log("Oh no, computer wins");
  } else {
    console.log("Please check the input, we didn't understand it");
  }

  const playAgainPrompt = prompt("Do you want to play again(yes/no)?");
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing, see you next time");
  }
}

// Start this game
rockPaperScissorsGame();
