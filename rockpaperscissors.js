////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var x = move
    x = x || getInput();
	return x;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var x = move
    x = x || randomPlay()
	return x;
}
function getWinner(playerMove,computerMove) {
     // This function should either give us back 'player', 'computer', or 'tie'.
     // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
     // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
     if (playerMove == computerMove) {
         return 'tie';
     } else if  ((playerMove == 'rock' && computerMove == 'scissors')||
                 (playerMove == 'paper' && computerMove == 'rock') ||
                 (playerMove == 'scissors' && computerMove == 'paper')) {
         return 'player';
     } else {
         return 'computer';
     }
 }
 
 function playToFive() {
     console.log("Let's play Rock Paper Scissors");
     var playerWins = 0;
     var computerWins = 0;
     // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
     while (playerWins < 5 && computerWins < 5) {
         var playerMove = getPlayerMove();
         var computerMove = getComputerMove();
         var winner = getWinner(playerMove,computerMove);
         if (winner == 'player') {
             playerWins += 1;
         } else if (winner == 'computer') {
             computerWins += 1;
         }
         // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
         // For example,
         //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
         //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
         console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
         console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
     }
     return [playerWins, computerWins];
 }
 playToFive();
 