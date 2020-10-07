var readlineSync = require("readline-sync");


console.log("Welcome to Casino Online");


var age = readlineSync.question("You must be over 18 to enter, please enter you age:")
var sum = 18 - age



if (age < 18 ) {
    console.log("Access denied, player must be over 18.");
    console.log("You will be eligible to join casino online in ${sum} years.");
}

else {
    console.log("Best of luck in your games and play responsibly!");
}
