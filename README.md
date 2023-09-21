# README Generator

## Table of Contents
-[Description](#description)  
-[Installation](#installation)  
-[Usage](#usage)  
-[Contributing](#contributing)  
-[Tests](#tests)  
-[Credits](#credits)  
-[License](#license)  
-[Questions](#questions)

## Description
This application creates a professional read-me file for any repository or web-development project. It was created for web developers to easily create a read-me file for any repository they need. The app was created using node.js and its built in file system, as well as inquirer from npm.

## Installation
Install this application by first installing node.js to your computer. Once that is done, install npm and inquirer version 8.2.4. The last thing to install is the built in file sytem (fs).promises.

## Usage
Start the application by first making sure your terminal is located in the folder that has the index.js for this project. Then, type "node index.js" into the terminal. This will trigger the app to start and you will first be asked to enter the title of the project. When you type your answer and press enter, your response will be saved and the next question will be asked. This process will be repeated for all questions except for the one about the license. This prompt will display options to choose from. When you use the arrow keys to navigate to the correct license and press enter, your answer is saved. Once all the prompts are answered, a file named "NewREADME.md" will be created with all of the entered responses formatted using Markdown, so it is ready to use in your GitHub repository.

## Contributing
To contribe, fork the project, create a branch to work on, edit tha branch, and then create a pull request. If the edits are approved, your contributions will be added. 

## Tests
To test this application or have your own empty README file template, press enter without typing an answer for any of the prompts. When the license prompt asks you to select a license from the list, select "None". You will see that a new  empty readme file is created in the folder you are in witch the only section containing anything is the license section. From there you can input text into each section manually. Furthermore, you can test this app by inputting whatever text you like into each section to familliarize yourself with its functionality.

## Credits
This app's code was sourced from a Uconn web development bootcamp in the following repo: https://git.bootcampcontent.com/University-of-Connecticut/CONN-VIRT-FSF-PT-07-2023-U-LOLC.git. Each of the functions were built my me on top of the sourced code structure.

## License
This project is not protected under any license.



## Questions
To view more of my work, view my GitHub profile: [adaking1](https://github.com/adaking1)

If you have any questions about this project please email me here: kinga1215@yahoo.com