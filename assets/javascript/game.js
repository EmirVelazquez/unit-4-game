/* First step here is to create the ready master function that loads
once DOM is ready */

$(document).ready(function () {
    //Global Variables Code
    //`````````````````````````````````````````````````````````````````````````

    //Made an Object that will hold the rupee's value:
    var rupee = {
        blue: [
            value = 0
        ],
        green: [
            value = 0
        ],
        red: [
            value = 0
        ],
        yellow: [
            value = 0
        ]
    };

    //Holds the current total score:
    var totalScore = 0;
    //Holds the target number to win game:
    var targetNumber = 0;
    //Holds the number of Wins:
    var totalWin = 1;
    //Holds the number of Losses:
    var totalLoss = 1;

    //Functions Code
    //`````````````````````````````````````````````````````````````````````````

    //This function will start the game at the beginning as
    //well as reset the total score and set random numbers:
    function startGame() {
        //Reset total score to 0
        totalScore = 0;
        //Get target number by calling on randomNum function
        targetNumber = randomNum(19, 120);
        //Assign rupee value by calling on randomNum function
        rupee.blue.value = randomNum(1, 12);
        rupee.green.value = randomNum(1, 12);
        rupee.red.value = randomNum(1, 12);
        rupee.yellow.value = randomNum(1, 12);
        //Changes to HTML
        $("#randomNum").text(targetNumber);
        $("#totalScore").text("0");
    }

    //This function will create a random number when called
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //This function will check if user won or lost and reset the game
    function gameEnd() {
        if (totalScore === targetNumber) {
            alert("You Won! Hero of Hyrule!");
            $("#totalWin").text("Wins: " + totalWin++);
            startGame();
        }

        else if (totalScore > targetNumber) {
            alert("Round Over Link! Try Again!");
            $("#totalLoss").text("Losses: " + totalLoss++);
            startGame();
        }
    }

    //Main Process Code
    //`````````````````````````````````````````````````````````````````````````

    //Call Start Game Function
    startGame();

    //Make an on-click event for each rupee for when they are clicked
    $("#blueRupee").on("click", function () {
        //Adds blue rupee value to total score variable.
        totalScore = totalScore + rupee.blue.value;
        //Displays total score from blue rupee click.
        $("#totalScore").text(totalScore);
        //Calls on the gameEnd function which contains if statements
        gameEnd();
    });

    $("#greenRupee").on("click", function () {
        //Adds green rupee value to total score variable.
        totalScore = totalScore + rupee.green.value;
        //Displays total score from green rupee click.
        $("#totalScore").text(totalScore);
        //Calls on the gameEnd function which contains if statements
        gameEnd();
    });

    $("#redRupee").on("click", function () {
        //Adds red rupee value to total score variable.
        totalScore = totalScore + rupee.red.value;
        //Displays total score from red rupee click.
        $("#totalScore").text(totalScore);
        //Calls on the gameEnd function which contains if statements
        gameEnd();
    });

    $("#yellowRupee").on("click", function () {
        //Adds yellow rupee value to total score variable.
        totalScore = totalScore + rupee.yellow.value;
        //Displays total score from yellow rupee click.
        $("#totalScore").text(totalScore);
        //Calls on the gameEnd function which contains if statements
        gameEnd();
    });

























});