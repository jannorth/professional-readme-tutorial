// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {
    return "";
  } else {
    if (data.license === "MIT") {
      return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
    if (data.license == "Apache") {
      return `![MIT License](https://opensource.org/licenses/MIT)`;
    }
    if (data.license === "Boost") {
      return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    }
    if (data.license === "BSD 3-Clause") {
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "None") {
    return "";
  } else {
    if (data.license === "MIT") {
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    }
    if (data.license === "Apache") {
      return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (data.license === "Boost") {
      return `[Boost License](https://www.boost.org/LICENSE_1_0.txt)`;
    }
    if (data.license === "BSD 3-Clause") {
      return `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") {
    return "";
  } else {
    return `## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [Tests](#Tests)
- [License](#License)
- [Questions?](#Questions?)
- [Contributions](#Contributions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

## License
${renderLicenseLink(data)}

## Questions?
- [GitHub Username] ${data.profile}
- [GitHub Profile](https://github.com/jannorth)
- [Email] ${data.contact}

## Contributions

`;
}

module.exports = generateMarkdown;
