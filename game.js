
let playerSelect = prompt("choose rock paper or scissors").toUpperCase();



if (playerSelect ===  "ROCK" || playerSelect ===  "PAPER" || playerSelect ===  "SCISSORS"){
    
    let stage = playerSelect + getComputerChoice;

    switch{
            case stage === "ROCKSCISSORS": console.log("you win") 
            break;
            case stage === "SCISSORSROCK": console.log("you lose") 
            break;
            case stage === "ROCKPAPER": console.log("you lose") 
            break;
            case stage === "PAPERROCK": console.log("you win") 
            break;
            case stage === "SCISSORSPAPER": console.log("you win") 
            break;
            case stage === "PAPERSCISSORS": console.log("you lose") 
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
console.log(getComputerChoice());