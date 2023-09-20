// TODO: Include packages needed for this application
const fs = require("fs").promises;
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{name: "title", message: "What is your project's title?"}, {name: "description", message: "Enter a description of your project"}, 
                    {name: "installation", message: "Please provide installation instructions"}, {name: "usage", message: "Please provide usage information"}, 
                    {name: "contributing", message: "Please provide guidelines for contributing to this project"}, {name: "tests", message: "Please include test instructions"}, 
                    {name: "license", message: "Please select a license for this project"}, {name: "github", message: "What is your GitHub username?"}, 
                    {name: "email", message: "What is your email address?"}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator.markdown(data));
}

// TODO: Create a function to initialize app
const data = {};
let index = 0;
function init() {
    if (questions[index].name !== "license") {    
    inquirer.prompt([
        {
            name: questions[index].name,
            type: "input",
            message: questions[index].message
        }
    ])
        .then((response) => {
            if (index < questions.length-1) {
                data[Object.keys(response)] = Object.entries(response)[0][1];
                index++;
                init();
            }
            else{
                data[Object.keys(response)] = Object.entries(response)[0][1];
                return writeToFile("newREADME.md", data);
            }
        })
    }
    else{
        inquirer.prompt([
            {
                name: questions[index].name,
                type: "list",
                message: questions[index].message,
                choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0",
                        "MIT License", "Boost Software License 1.0", "The Unlicense", "None"]
            }
        ])
        .then((response) => {
            data[Object.keys(response)] = Object.entries(response)[0][1];
            index++
            init();
        })
    }
}

// Function call to initialize app
init();