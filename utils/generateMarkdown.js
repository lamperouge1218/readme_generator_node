function renderLicenseBadge(userResponses) { 
  if (userResponses.license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue"
  } else if (userResponses.license === "GNU GPLv3") {
    return "https://img.shields.io/badge/license-GNU%20GPLv3-red"
  } else if (userResponses.license === "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache%20License%202.0-green"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userResponses) {
  if (userResponses.license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (userResponses.license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (userResponses.license === "Apache License 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  }
}


function generateMarkdown(userResponses) {
  return `# ${userResponses.title}  

![License Badge](${renderLicenseBadge(userResponses)})

## Description 

${userResponses.description}

## Table of Contents

-- [Installation](#installation)

-- [Usage](#usage)

-- [License](#license)

-- [Contributing](#contributing)

-- [Tests](#tests)

-- [Questions](#questions)

## Installation
  
To install necessary dependencies, run the following command:

    ${userResponses.installation}

## Usage

${userResponses.usage}

## License

This project is protected under the [${userResponses.license}](${renderLicenseLink(userResponses)}) license. (${userResponses.year}) (${userResponses.name})

## Contributing

${userResponses.contributing}

## Tests

${userResponses.tests}

## Questions

If there any questions regarding this project, I can be contacted in the following places:

GitHub: [@${userResponses.questions}](https://github.com/${userResponses.questions})

Email: ${userResponses.questions2}
`;
}

module.exports = generateMarkdown;