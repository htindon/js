var game = function () {

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return ("the result is a tie!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return ("rock wins over scissors so you win this game.");
        } else {
            return ("paper wins over rock so you loose this game.");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return ("paper wins over rock so you win this game.");
        } else {
            return ("scissors wins over paper so you loose this game.");
        }
    }
    else {
        if (choice2 === "paper") {
            return ("scissors wins over paper so you win this game.");
        } else {
            return ("rock wins wins over scissors so you loose this game.");
        }
    }
};

document.write("You picked " + userChoice + ", the computer choose " + computerChoice + ", ");
document.write(compare(userChoice, computerChoice));
document.close();
};