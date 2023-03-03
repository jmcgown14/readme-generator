const inquirer = require('inquirer');
const fs = require('fs');

function renderLicense(license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "IBM":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      case "Mozilla":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "ISC":
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      case "None":
        return "";
    }
  }

const generateREADME = ({ title, description, install, usage, collaborators, thirdparty, license, github, githubURL, email}) =>
`# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Needed Software

${install},

>## Usage

${usage}

## Credits

Collaborators worked with: ${collaborators}
Third-Party used: ${thirdparty}

## License
${license === "none" ? "" : " - [License](#license)"}

${license === "None" ? "" : "## License"} 
  ${renderLicense(license)}

## Questions

If you have any questions you can reach out on my github page [${github}](${githubURL})
You can also reach out via [email](mailto:${email}).`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short describing your project. This can include your motivation, why you built it, and the problem being solved by this applicaiton.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command can be run in terminal to install software to be able to run your program?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for a User to be able to follow while using your application. You can use the WHEN... THEN.. formatting if you want.',
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Please list names of anyone whom you collabortaed with, if no one, type "none".',
        },
        {
            type: 'input',
            name: 'thridparty',
            message: 'Please list any Third-Party names you used for your project, if none used, type "none".',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license did you choose for your project?',
            choices: ['MIT', 'Mozilla', 'IBM', 'ISC']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'githubURL',
            message: 'Enter your GitHub Profile URL.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });