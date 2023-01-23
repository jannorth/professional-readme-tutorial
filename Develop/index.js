// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "credits",
    message: "Give credit where you received help completing this project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Include any testing instructions here:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license is needed for this project?",
    choices: ["MIT", "Apache", "Boost", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "profile",
    message: "Enter your GitHub username:"
  },
  {
    type: "input",
    name: "contact",
    message: "Enter email and instructions on best way to reach you:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(data),
      err ? console.log(err) : console.log("README.md generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
