// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project."

    },
    // {
    //     type: "list",
    //     name: "tableOfContents",
    //     message: ""
    // },
    {
        type: "list",
        name: "license",
        message: "Which license is needed for this project?",
        choices: ["MIT", "Apache", "Boost", "BSD 3-Clause", "None"]
    }
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
