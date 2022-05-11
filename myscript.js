
let playerScore = 0
let computerScore = 0
game();






function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
   alert('It is a tie!')
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    computerScore++
    alert('You lose! Paper Beats Rock!')
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
    playerScore++
    alert('You win! Rock beats Scissors!')
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
    playerScore++
    alert('You win! Paper beats Rock!')
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
    alert('It is a tie!')
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
    computerScore++
    alert('You lose! Scissors beats paper!')
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
   computerScore++
    alert('You lose! Rock beats scissors!')
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
   playerScore++
   alert('You win! Scissors beats paper!')
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
   alert('It is a tie!')
} else {
    return 'What was that?'
}
}



function game() {
    for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt('What is your choice?')
    console.log("Computer chose" + " " + computerSelection);
    console.log("You chose" + " " + playerSelection);
    playRound(playerSelection, computerSelection);
    }
}
    console.log("Game over")
    if(playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore == computerScore) {
        console.log("It is a Tie!")
    } else {
        console.log("You lost the game! Computer wins this time.");
    }






