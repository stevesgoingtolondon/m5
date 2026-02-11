/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Kat Morris
     Date: 2/10
     /2026  

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.addEventListener("load", addweekDays);

// function to write the weekday names into the calender
function addweekDays() {
    let i = 0; // initialize counter value

    // refefence the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    // write each weekday name into the heading cells
    while (i < 7) {
        headingCells [i] .innerHTML = weekDays[i];

        // increase the counter value by 1
        i++;
    }
}
window.addEventListener("load", showGames);

// Function to write game information into the calendar
function showGames() { 
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        // Open the paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;

            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        
        // Display the game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        // Include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        // Include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i] + "]***";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        }

        // Close the paragraph
        gameInfo += "</p>";
        
       // Write the information into a table cell
       let tableCell = document.getElementById(gameDates[i]);
       tableCell.insertAdjacentHTML ("beforeend", gameInfo)
    }
}