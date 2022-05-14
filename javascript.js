
// Create variables-----

let playerScore = 0;

let computerScore = 0;

let playerWin;

let computerWin;

let tieRound;



// Create function for computerPlay() to randomly returns rock, paper, or scissors-----

function computerPlay(x, y, z) {
    let choices = [x, y, z];

    return choices[Math.floor(Math.random() * choices.length)];
}



// Create function that plays one round of the game, has two parameters, returns string that declares the winner.-----//
// Return a value for the winner-----

function playRound() {

    let playerWin = `"You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}."`;

    let computerWin = `"You lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}. "`;

    let tieRound = "It's a tie!"

    if (playerSelection === computerSelection) {
        return tieRound;

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return playerWin;
   
    } else {
        return computerWin;
    }
} 



// Create function scoreBoard() to keep a score counter of each round played-----

function scoreBoard(playRound) {

    let roundResult = playRound();

    if (roundResult === playerWin) {
        return playerScore++;
        
    } else if (roundResult === computerWin) {
        return computerScore++;

    } else (roundResult === tieRound)
        return playerScore++ && computerScore++;
    

} 



// Create function gameResults() to return results of scoreBoard after 5 rounds-----

function gameResults() {

    if (playerScore > computerScore) {
        return "You are the winner!";

    } else {
        return "You lost the game.";
    }
}



// Create function called game(), plays 5 rounds, keeps score, and reports winner or loser at end-----

function game() {

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
            console.log(playerSelection)

        computerSelection = computerPlay('rock', 'paper', 'scissors');
            console.log(computerSelection)

        playRound();
            console.log(playRound())

        scoreBoard(playRound);
            console.log(scoreBoard(playRound))

        if (i === 5) {
            return gameResults();
        }
        
    }
    
}


console.log(game())





