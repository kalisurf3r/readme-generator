const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is the your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your contact email?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide instructions for installation.",
    },
    {
      type: "list",
      name: "license",
      message: "Please provide the license for your project.",
      choices: ["MIT", "GPL", "Apache", "BSD", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Please provide names of members for contributing to the project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide instructions for testing your project.",
    },
    {
      type: "input",
      name: "questions",
      message:
        "Please provide instructions for asking questions about your project.",
    },
  ])
  .then((data) => {
    fs.writeFile("newREADME.md", generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
