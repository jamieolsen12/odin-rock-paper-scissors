
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomInt]
    return computerChoice
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 6; i++) {
        let userChoice = prompt("Please enter your choice: 'rock', 'paper', or 'scissors'.").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));
    }      
}
    



function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    return "It's a tie! rock versus rock.";
                case "paper":
                    return "You lose! paper covers rock!";
                case "scissors":
                    return "You win! rock smashes scissors!";
                default:
                    return "error. computer choice invalid.";
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    return "You win! paper covers rock!";
                case "paper":
                    return "It's a tie! paper versus paper!";
                case "scissors":
                    return "You lose! scissors cut paper!";
                default:
                    return "error. computer choice invalid";
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    return "You lose! rock smashes scissors!";
                case "paper":
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

