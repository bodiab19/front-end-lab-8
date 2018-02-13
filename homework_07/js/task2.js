var Game = confirm("Do you want to play a game?");
var userNumber;
var Attempts;
var prize;
var startPosiblePrize;
var posiblePrize;
var max_numbe;
var randomNumber;
var win;

if (Game)
    while (Game) {
        prize = 0;
        win = true;
        Attempts = 0;
        max_number = 5;
        startPosiblePrize = 20;
        userNumber = -1;
        while (Game) {
            randomNumber = Math.floor(Math.random() * (max_number + 1));
            posiblePrize = startPosiblePrize;
            while (Number(userNumber) != randomNumber) {
                if (Attempts == 3) {
                    Attempts = 0;
                    win = false;
                    break;
                }
                posiblePrize = parseInt(posiblePrize / 2);
                userNumber = prompt("Enter a number from 0 to " + max_number + " \nAttempts left: " + Attempts + "\nTotal prize: " + prize + "$ \nPossible prize on current attempt: " + posiblePrize + "$");
                if (userNumber == null) {
                    userNumber = -1;
                }
                Attempts++;
            }

            if (win) {
                prize += posiblePrize;
                startPosiblePrize *= 3;
                max_number *= 2;
                Attempts = 0;
                userNumber = -1;
                Game = confirm("Do you want continue play a game?")
            } else {
                Game = false;
            }
        }
        console.log("Thank you for a game. Your prize is: " + prize + "$");
        Game = confirm("Do you want to play a game again?")
    }
else {
    console.log("You did not become a millionaire");
}
