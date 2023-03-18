

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

// add event listen to each button to start a round when the user selects a button,
// and use the button text as user choice
let rpsButtons = document.querySelectorAll(".choice-buttons .choice-button");
console.log(rpsButtons);

rpsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        userChoice = button.textContent.toLowerCase();
        game();

    })
})


// Game of 5 rounds which takes user choice as input and calls playRound function to calculate winner
function game() {
    userScore = 0
    computerScore = 0
    // let userChoice = prompt("Please enter your choice: 'rock', 'paper', or 'scissors'.").toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playRound(userChoice, computerChoice));
    console.log(`The score is You: ${userScore} - Computer: ${computerScore}`)      
}
    


// calculate winner based on user choice and computer choice
function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    return "It's a tie! rock versus rock.";
                case "paper":
                    computerScore++;
                    return "You lose! paper covers rock!";
                case "scissors":
                    userScore++;
                    return "You win! rock smashes scissors!";
                default:
                    return "error. computer choice invalid.";
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    userScore++;
                    return "You win! paper covers rock!";
                case "paper":
                    return "It's a tie! paper versus paper!";
                case "scissors":
                    computerScore++;
                    return "You lose! scissors cut paper!";
                default:
                    return "error. computer choice invalid";
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    computerScore++;
                    return "You lose! rock smashes scissors!";
                case "paper":
                    userScore++;
                    return "You win! scissors cut paper!";
                case "scissors":
                    return "It's a tie. scissors versus scissors.";
                default:
                    return "error. computer choice invalid";
            }
        default:
            return "error. user choice invalid.";
    }
}

game();

