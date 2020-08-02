// Require npm file system to access local modules
const fs = require("fs");

// Require npm http to create server
const http = require("http");

// Define npm dependency (`inquirer` to allow for console prompts)
const inquirer = require("inquirer");

// Require file to get `greeting`
const greeting = require("./greeting.js");
console.log(greeting);

// Declare host and port variables for server
const hostname = "127.0.0.1";
const port = "3000";

// Init server as varible for console prompts
const server = http.createServer(function(req, res) {});

// Function to prompt user via npm `inquirer`
function userQuestions() {
  inquirer
    .prompt([{
      type: "password",
      name: "userPassword",
      message: "What's the secret word?",
    }, ])
    // Write userPassword to userPassword.txt (requires npm fs)
    .then((answers) => {
      fs.writeFile("userPassword.txt", answers.userPassword, function(err) {
        // Validate
        console.log("Sucess! You guessed the secret word!");
      });
    });
}

// Run `userQuestions`
userQuestions();