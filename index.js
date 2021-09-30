// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a title for your project");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please describe your project");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "How would one install your project?",
        name: "installation",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter something");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "How would one use your project?",
        name: "usage",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter something");
            }
            return true;
        }
    },
    {
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: [
            { name: "MIT", },
            { name: "GNU GPLv3", },
            { name: "Apache License 2.0", },
        ]
    },
    {
        type: "input",
        message: "How would one contribute to your project?",
        name: "contributing",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter something");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "How would one test your project?",
        name: "tests",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter something");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "questions",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a GitHub username");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "questions2",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address");
            }
            return true;
        }
    },
];

// inquirer
//     .prompt(questions)
//     .then((userResponses) =>
//         console.log(userResponses)
//         );
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((userResponses) => {
            console.log(userResponses);
            writeToFile("README1.md", generateMarkdown(userResponses));

        })
    }


// // Function call to initialize app
init();