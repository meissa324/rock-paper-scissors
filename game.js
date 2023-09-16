

function getComputerChoice() {
    let choice = Math.random();

    let computerSelect;

    if (choice <= 1/3) {
         computerSelect = "rock";
    }
    else if (choice > 1/3 && choice < 2/3) {
         computerSelect = "paper";
    }
    else{
         computerSelect = "scissors";
    }

    return computerSelect
}
console.log(getComputerChoice());