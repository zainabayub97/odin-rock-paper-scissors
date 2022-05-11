const computerSelection = computerPlay();
const playerSelection = prompt('What is your choice?')


function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}
console.log("Computer chose" + " " + computerSelection);
console.log("You chose" + " " + playerSelection);

function playRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
   return 'It is a tie!'
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper Beats Rock!'
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors!'
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock!'
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
    return 'It is a tie!'
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats paper!'
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
   return 'You lose! Rock beats scissors!'
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
   return 'You win! Scissors beats paper!'
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
    console.log('It is a tie!');
}
}

console.log(playRound(playerSelection, computerSelection));