var readlineSync = require("readline-sync");


console.log("welcome to casino online ");


var age = readlineSync.question("you must be over 18 to enter , please enter you age ")

var sum = 18 - age 



if (age < 18 ){

    console.log(" acces denied ,player must be over 18 ")
    console.log(` you will be eligible to join casino online in ${sum} years `);
}

else {
    console.log("best of luck in your games and play responsibly ")
}
  