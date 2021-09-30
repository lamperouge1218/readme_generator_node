// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.title}

## Description 

${userResponses.description}

## Table of Contents
-- [Installation](#installation)\n
-- [Usage](#usage)\n
-- [License](#license)\n
-- [Contributing](#contributing)\n
-- [Tests](#tests)\n
-- [Questions](#questions)

## Installation
  
To install necessary dependencies, run the following command:\n
  ${userResponses.installation}

## Usage
${userResponses.usage}

## License
${userResponses.license}

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
