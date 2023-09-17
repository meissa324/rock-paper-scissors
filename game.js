
let playerSelect = prompt("choose rock paper or scissors").toUpperCase();

let computerSelect = getComputerChoice();

let stage = playerSelect + computerSelect;

if (playerSelect ===  "ROCK" || playerSelect ===  "PAPER" || playerSelect ===  "SCISSORS"){
    
    

    switch(stage){
            case "ROCKSCISSORS": console.log("you win") 
            break;

            case "SCISSORSROCK": console.log("you lose") 
            break;

            case "ROCKPAPER": console.log("you lose") 
            break;

            case "PAPERROCK": console.log("you win") 
            break;

            case "SCISSORSPAPER": console.log("you win") 
            break;

            case "PAPERSCISSORS": console.log("you lose") 
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
