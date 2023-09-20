// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "GNU AGPLv3":
        return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
        break;
      case "GNU GPLv3":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        break;
      case "GNU LGPLv3":
        return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
        break
      case "Mozilla Public License 2.0":
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
        break;
      case "Apache License 2.0":
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        break
      case "MIT License":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        break;
      case "Boost Software License 1.0":
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        break;
      case "The Unlicense":
        return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        break;
      case "None":
        return "";
        break;
    }
}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) {
    const text = "For more information about this license, click the following link:"
    switch (license) {
    case "GNU AGPLv3":
      return `${text} https://www.gnu.org/licenses/agpl-3.0`;
      break;
    case "GNU GPLv3":
      return `${text} https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case "GNU LGPLv3":
      return `${text} https://www.gnu.org/licenses/lgpl-3.0`;
      break
    case "Mozilla Public License 2.0":
      return `${text} https://opensource.org/licenses/MPL-2.0`;
      break;
    case "Apache License 2.0":
      return `${text} https://opensource.org/licenses/Apache-2.0`;
      break
    case "MIT License":
      return `${text} https://opensource.org/licenses/MIT`;
      break;
    case "Boost Software License 1.0":
      return `${text} https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case "The Unlicense":
      return `${text} http://unlicense.org/`;
      break;
    case "None":
      return "";
      break;
  }
}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "This project is not protected under any license."
    }
    else {
        return `This project is protected under ${license}`
    }
}
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}
# ${data.title}

## Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Tests](#Tests)

[License](#License)

[Questions](#Questions)

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

## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

`;
}
  
module.exports = {
markdown: generateMarkdown
};
  