// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'GPL') {
        return '![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)';
    } else if (license === 'Apache') {
        return '![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)';
    } else if (license === 'BSD') {
        return '![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'GPL') {
        return '[GPL](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache') {
        return '[Apache](https://www.apache.org/licenses/LICENSE-2.0)';
    } else if (license === 'BSD') {
        return '[BSD](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License`;
    }}

function generateMarkdown(data) {
  return `# ${data.title}
 
  ---

  ## Description

 ${data.description}


## Getting Started

---

### Installation

- ${data.installation}

---

### License

**License:** ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

---

### Contributing

- ${data.contributing}

---

### Tests

- ${data.tests}

---

### Questions

- ${data.questions}

- ${data.username}

- ${data.email}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
`;
}

module.exports = generateMarkdown;
