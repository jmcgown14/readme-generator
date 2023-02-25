const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, }) =>
    `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Needed Software

${step - one},
${step - two},

## Usage

>${usage}

## Credits

Collaborators worked with: ${collaborators}
Third-Party used: ${third-party}

## License


The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`;

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
            name: 'step-one',
            message: 'What command can be run in terminal to install software to be able to run your program?',
        },
        {
            type: 'input',
            name: 'step-two',
            message: 'What command can be run in terminal to install specific software needed for your program?',
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
            name: 'thrid-party',
            message: 'Please list any Third-Party names you used for your project, if none used, type "none"',
        },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'Which license did you choose for your project?',
        //     choices: []
        // },
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'Enter your GitHub Username',
        // },
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'Enter your GitHub Username',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });