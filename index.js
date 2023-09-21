const fs = require("fs").promises;
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown");

// this function starts the inquirer prompts 
// they are called using recursion since all but one of the questions are formatted the same 
const data = {};
let index = 0;
function init() {
    // this is an array of objects, each with a name and message for inquirer to prompt
    // it's inside the function because it is only referenced here
    const questions = [{name: "title", message: "What is your project's title?"}, {name: "description", message: "Enter a description of your project"}, 
            {name: "installation", message: "Please provide installation instructions"}, {name: "usage", message: "Please provide usage information"}, 
            {name: "contributing", message: "Please provide guidelines for contributing to this project"}, {name: "tests", message: "Please include test instructions"}, 
            {name: "credits", message: "Please credit the author(s) of this code and add any citations if needed"}, {name: "license", message: "Please select a license for this project"}, 
            {name: "github", message: "What is your GitHub username?"}, {name: "email", message: "What is your email address?"}];
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
        .catch((err) => console.error(err));
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
        .catch((err) => console.error(err));
    }
}

// This function call initializes the app when "node index.js" is entered in the terminal
init();

// make demo video and use that for readme