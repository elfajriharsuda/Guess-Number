let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(human, computer, target) {
  let humanGuess = Math.abs(human - target);
  let computerGuess = Math.abs(computer - target);
  if (humanGuess <= computerGuess) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if(winner === 'human') {
    return humanScore += 1;
  } else if (winner === 'computer') {
    return computerScore += 1;
  }
}

function advanceRound() {
  return currentRoundNumber +=1;
}