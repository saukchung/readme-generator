// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  //Title
  {
    type: "input",
    name: "title",
    message: "What is the title of this README?",
  },

  //Description Content
  {
    type: "input",
    name: "description",
    message: "What would you like to put under the Description section?",
  },

  //installation instructions
  {
    type: "input",
    name: "installInformation",
    message: "Installation instructions?",
  },

  //Usage Information
  {
    type: "input",
    name: "usageInformation",
    message: "Usage Information?",
  },

  //Contributions
  {
    type: "input",
    name: "contributionInformation",
    message: "Contributions?",
  },

  //Test Instructions
  {
    type: "input",
    name: "testInformation",
    message: "Test Information?",
  },

  //Choose a license
  {
    type: "list",
    name: "licenseInformation",
    message: "Choose a license?",
  },

  //GitHub Username
  {
    type: "input",
    name: "contactGithub",
    message: "Github?",
  },

  //Email
  {
    type: "input",
    name: "contactEmail",
    message: "Email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
