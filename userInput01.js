// Require Node.js file system and HTTP modules
const fs = require("fs");
const http = require("http");

// Require Node.js `inquirer` npm dependency and `greeting.js` file
const inquirer = require("inquirer");
const greeting = require("./greeting.js");

// Declare host and port variables for server
const hostname = "127.0.0.1";
const port = "3000";

// Create server
const server = http.createServer(function (req, res) {
  // Declare statusCode 200: server without errors
  res.statusCode = 200;
  // res.setHeader("Content-type", "text/html");
});

// Declare variable to confirm server start
const ready = "Look! a wild server appeared on port " + port;
console.log(ready);

// Console log `greeting` variable
console.log(greeting);

// Create function to prompt user for userPassword
function userQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "userPassword",
        message: "What's the secret word?",
      },
    ])
    // Write userPassword to userPassword.txt with npm File Systems
    .then((answers) => {
      fs.writeFile("userPassword.txt", answers.userPassword, function (err) {
        // Validate
        console.log("Sucess! You guessed the secret word!");
      });
    });
}

// Run userQuestions
userQuestions();
