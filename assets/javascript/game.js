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
        yello: [
            value = 0
        ]
    };

    //Holds the current total score:
    var totalScore = 0;
    //Holds the target number to win game:
    var targetNumber = 0;
    //Holds the number of Wins:
    var totalWin = 0;
    //Holds the number of Losses:
    var totalLoss = 0;






    //Functions Code
    //`````````````````````````````````````````````````````````````````````````

    //This function will start the game at the beginning as
    //well as reset the game:
    function startGame() {
        //Reset total score to 0
        totalScore = 0;
        //Get target number by calling on randomNum function
        targetNumber = randomNum(19, 120);
        //Assign rupee value by calling on randomNum function

    }

    //This function will create a random number when called
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }














    //Main Process Code
    //`````````````````````````````````````````````````````````````````````````





    //Make an on-click event for each rupee for when they are clicked
    $("#blueRupee").on("click", function () {
        //Test on console
        console.log("You clicked the blue rupee");
    });

    $("#greenRupee").on("click", function () {
        //Test on console
        console.log("You clicked the green rupee");
    });

    $("#redRupee").on("click", function () {
        //Test on console
        console.log("You clicked the red rupee");
    });

    $("#yellowRupee").on("click", function () {
        //Test on console
        console.log("You clicked the yellow rupee");
    });




























});