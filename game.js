var game = function () {

var mySelect = document.getElementById("user_choice");
var userChoice = mySelect.options[mySelect.selectedIndex].value;
//var userChoice = "paper";

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

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
            return ("rock wins over scissors so you loose this game.");
        }
    }
};

document.getElementById('answer').innerHTML =  "You picked " + userChoice + ", the computer choose " + computerChoice + ", " + compare(userChoice, computerChoice);
document.close();
};
