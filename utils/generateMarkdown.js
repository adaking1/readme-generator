// This function returns the link for the selected license's badge
// This function gets called in the generateMarkdown function return statement
// no break statements needed because the function gets returned in every case
// no default case needed since every option in the choices list is covered in a case
function renderLicenseBadge(license) {
    switch (license) {
      case "GNU AGPLv3":
        return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      case "GNU GPLv3":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "GNU LGPLv3":
        return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      case "Mozilla Public License 2.0":
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      case "Apache License 2.0":
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      case "MIT License":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "Boost Software License 1.0":
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      case "The Unlicense":
        return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      case "None":
        return "";
    }
}
  
// This function returns the link for the selected license's website
// This gets called in the return statement for the generateMarkdown function 
function renderLicenseLink(license) {
    const text = "For more information about this license, click the following link:"
    switch (license) {
    case "GNU AGPLv3":
      return `${text} https://www.gnu.org/licenses/agpl-3.0`;
    case "GNU GPLv3":
      return `${text} https://www.gnu.org/licenses/gpl-3.0`;
    case "GNU LGPLv3":
      return `${text} https://www.gnu.org/licenses/lgpl-3.0`;
    case "Mozilla Public License 2.0":
      return `${text} https://opensource.org/licenses/MPL-2.0`;
    case "Apache License 2.0":
      return `${text} https://opensource.org/licenses/Apache-2.0`;
    case "MIT License":
      return `${text} https://opensource.org/licenses/MIT`;
    case "Boost Software License 1.0":
      return `${text} https://www.boost.org/LICENSE_1_0.txt`;
    case "The Unlicense":
      return `${text} http://unlicense.org/`;
    case "None":
      return "";
  }
}
  
  // This function creates the text for the license section of the new readme
function renderLicenseSection(license) {
    if (license === "None") {
        return "This project is not protected under any license."
    }
    else {
        return `This project is protected under ${license}`
    }
}

  // This function returns the markdown template for the readme file
  // This will be exported to the index.js file to be used with the inquirer prompt answers
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}
# ${data.title}

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
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions
To view more of my work, view my GitHub profile: [${data.github}](https://github.com/${data.github})

If you have any questions about this project please email me here: ${data.email}

`;
}
  
// This object is used to store the information that can be read from this file
// It is storing the function generateMarkdown as an object method to be exported to another file
module.exports = {
markdown: generateMarkdown
};
  