// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "How would one install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How would one use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What license does your project use?",
        name: "license"
    },
    {
        type: "input",
        message: "How would one contribute to your project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How would one test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "How would one reach you for further questions about your project?",
        name: "questions"
    },
];

inquirer
    .prompt(questions)
    .then((responses) =>
        console.log(responses)
        );
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();