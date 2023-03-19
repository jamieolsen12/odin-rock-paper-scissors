
// Changes to make

// start round with user choosing a button
// calculate winner, then display score on the page
// After 5 wins, declare a winner, then ask if the user wants to play again

// after everything works, make it look good




// randomly calculate number to use for RPS selection 
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomInt]
    return computerChoice
}

// score variables
let userScore = 0;
let computerScore = 0;

// scoreboard variable to display userScore and computerScore
let userScoreDisplay = document.querySelector('.user-score-text');
let computerScoreDisplay = document.querySelector('.computer-score-text');

// add top-text and bottom-text to change text after each round
let topText = document.querySelector('.top-text');
let bottomText = document.querySelector('.bottom-text');

// add user choice and computer choice variables to show each choice after each round
let userChoiceDisplay = document.querySelector('.user-choice-display');
let computerChoiceDisplay = document.querySelector('.computer-choice-display');



// add event listen to each button to start a round when the user selects a button,
// and use the button text as user choice
let rpsButtons = document.querySelectorAll(".choice-buttons-row .choice-button");

rpsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.id;
        computerChoice = getComputerChoice();
        game();
        updateEmojis()
        updateScoreboard();
        checkWinner();
    })
})


// Game of 5 rounds which takes user choice as input and calls playRound function to calculate winner
function game() {
    // let userChoice = prompt("Please enter your choice: 'rock', 'paper', or 'scissors'.").toLowerCase();
    console.log(playRound(userChoice, computerChoice));
    console.log(`The score is You: ${userScore} - Computer: ${computerScore}`)      
}
    


// calculate winner based on user choice and computer choice
function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    topText.textContent = "It's a tie!";
                    bottomText.textContent = "Rock ties Rock.";
                    return "It's a tie! rock versus rock.";
                case "paper":
                    computerScore++;
                    topText.textContent = "You lose!";
                    bottomText.textContent = "Paper covers Rock!"
                    return "You lose! paper covers rock!";
                case "scissors":
                    userScore++;
                    topText.textContent = "You win!";
                    bottomText.textContent = "Rock DESTROYS Scissors!"
                    return "You win! rock smashes scissors!";
                default:
                    return "error. computer choice invalid.";
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    userScore++;
                    topText.textContent = "You win!";
                    bottomText.textContent = "Paper covers Rock!"
                    return "You win! paper covers rock!";
                case "paper":
                    topText.textContent = "It's a tie!";
                    bottomText.textContent = "Paper ties Paper.";
                    return "It's a tie! paper versus paper!";
                case "scissors":
                    computerScore++;
                    topText.textContent = "You lose!";
                    bottomText.textContent = "Scissors cuts Paper!"
                    return "You lose! scissors cut paper!";
                default:
                    return "error. computer choice invalid";
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    computerScore++;
                    topText.textContent = "You lose!";
                    bottomText.textContent = "Rock smashes Scissors!";
                    return "You lose! rock smashes scissors!";
                case "paper":
                    userScore++;
                    topText.textContent = "You win!";
                    bottomText.textContent = "Scissors cut Paper!";
                    return "You win! scissors cut paper!";
                case "scissors":
                    topText.textContent = "It's a tie.";
                    bottomText.textContent = "Scissors tie Scissors.";
                    return "It's a tie. scissors versus scissors.";
                default:
                    return "error. computer choice invalid";
            }
        default:
            return "error. user choice invalid.";
    }
}


// Check if either user or computer have 5 points, if so, declare winner, reset scores to 0
function checkWinner() {
    if (userScore >= 5) {
        console.log("Game over. You win!!");
        userScore = 0;
        computerScore = 0;
    }
    if (computerScore >= 5) {
        console.log("Game over. Computer wins!");
        userScore = 0;
        computerScore = 0;
    }
}


function updateScoreboard() {
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

// return emoji to display based on choice
function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "✊"
        case "paper":
            return "✋"
        case "scissors":
            return "✌️"
    }
}

// update user and computer choice displays with getEmoji() function
function updateEmojis() {
    userChoiceDisplay.textContent = getEmoji(userChoice);
    computerChoiceDisplay.textContent = getEmoji(computerChoice);
}
