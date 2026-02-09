/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

const min_number = 1;
const max_number = 10;

function startSectretNumberGame() {
  const secretNumber = Math.floor(Math.random() * max_number) + 1;
  let attempt = 0;
  let guess = null;

  console.log("Welcome to the number guessing game");
  console.log("Please enter number between 1 to 10");

  while (guess !== secretNumber) {
    const guessPrompt = prompt("Enter you guess");
    guess = parseInt(guessPrompt);

    if (isNaN(guess) || guess < min_number || guess > max_number) {
      console.log(
        `Please enter valid number between ${min_number} to ${max_number}`,
      );
      continue;
    }

    attempt++;

    if (guess < secretNumber) {
      console.log("Too low!");
    } else if (guess > secretNumber) {
      console.log("Too high!");
    } else {
      console.log(
        `Wow! you have correctly guess the number ${guess} with ${attempt} times`,
      );
      break;
    }
  }

  const playAgainPrompt = prompt("Do you want to play again(yes/no)?");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    startSectretNumberGame();
  } else {
    console.log("Thanks, see you next time");
  }
}

// Start the game
startSectretNumberGame();
