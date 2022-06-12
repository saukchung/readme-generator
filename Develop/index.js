// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  //Title
  {
    type: "input",
    name: "title",
    message: `What is the title of this project?
    `,
  },

  //Description Content
  {
    type: "input",
    name: "description",
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    `,
  },

  //installation instructions
  {
    type: "input",
    name: "installInformation",
    message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    `,
  },

  //Usage Information
  {
    type: "input",
    name: "usageInformation",
    message: `Provide instructions and examples for use. Include screenshots as needed.
    `,
  },

  //Contributions
  {
    type: "input",
    name: "contributionInformation",
    message: `List your collaborators, if any, with links to their GitHub profiles.

    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    `,
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
    choices: ["1","2","3","4"]
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
  }
];

// TODO: Create a function to write README file
function writeReadme(data) {
    const content = "WORKSSS";
    fs.writeFile('../OPENME/"README.md', content, err => {
      if (err) {
        console.error(err);
      }
      else {console.log("Successfully created a README. Check OPENME.")}
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
          writeReadme(response);
        })
}

// Function call to initialize app
init();
