const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, install, usage, collaborators, thirdparty}) =>
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

${license}

## Test

To run the project, use this: ${test} in the command line.

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
            choices: ['MIT', 'Apache 2.0', 'GNU General Public v3.0']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter what command is need in the terminal to run your project.',
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