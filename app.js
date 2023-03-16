
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomInt]
    return computerChoice
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
