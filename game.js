
let playerSelect = prompt("choose rock paper or scissors").toUpperCase();

let computerSelect = getComputerChoice();

let stage = playerSelect + computerSelect;

let playerWon = 0;
let computerWon = 0;

if (playerSelect ===  "ROCK" || playerSelect ===  "PAPER" || playerSelect ===  "SCISSORS"){


    switch(stage){
            case "ROCKSCISSORS": {
                console.log("you win");
                playerWon += 1;
        
            }
            break;

            case "SCISSORSROCK": {
                console.log("you lose");
                computerWon += 1; 
            }
            break;

            case "ROCKPAPER": {
                console.log("you lose");
                computerWon += 1;
            }
            break;

            case "PAPERROCK": {
                console.log("you win");
                playerWonW += 1;
            }
            break;

            case "SCISSORSPAPER": {
                console.log("you win");
                playerWon += 1;
            }
            break;

            case "PAPERSCISSORS": {
                console.log("you lose");
                computerWon += 1;
            break;

            default: console.log("tie")
            break;


        }


}
else{
    console.log("pick a real option dweeb")
}







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

    return computerSelect.toUpperCase();
}
