/* First step here is to create the ready master function that loads
once DOM is ready */

$(document).ready(function () {
    //Counter made to keep track of user's total
    var blueCounter = 0;
    var greenCounter = 0;
    var redCounter = 0;
    var yellowCounter = 0;
    var totalCounter = blueCounter + greenCounter + redCounter + yellowCounter;
    //Make an on-click event for each rupee for when they are clicked
    $(".blueRupee").on("click", function () {
        //Adds to the blue counter
        blueCounter++;
        //Test on console
        console.log("You clicked the blue rupee " + blueCounter + " times!");
    });

    $(".greenRupee").on("click", function () {
        //Adds to the green counter
        greenCounter++;
        //Test on console
        $(".totalScore").text(totalCounter);
    });

    $(".redRupee").on("click", function () {
        //Adds to the red counter
        redCounter++;
        //Test on console
        console.log("You clicked the red rupee " + redCounter + " times!");
    });

    $(".yellowRupee").on("click", function () {
        //Adds to the yellow counter
        yellowCounter++;
        //Test on console
        console.log("You clicked the yellow rupee " + yellowCounter + " times!");
    });

    //Here I establish the random number for the user to win the round
    var randomNumber = "";

    //This will input the target number into the HTML
    $(".randomNum").text(randomNumber);




























});