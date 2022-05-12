// Load packages
const inquirer = require('inquirer');
const generateTemplate = require('./src/markdownTemplate');
const {writeFile} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        // Prompt for project name
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for project description
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for installation guidelines
        {
            type: 'input',
            name: 'install',
            message: 'Please provide installation instructions and requirements. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for usage guidelines
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage guidance. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for license type
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license does this project fall under?',
            choices: ['Apache 2.0', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause', 'Creative Commons', 'Eclipse', 
            'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 
            'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0',
            'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'Attribution License', 
            'Open Database License', 'Public Domain Dedication and License', 'Perl License',
            'Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 
            'The Do What the Fuck You Want to Public License', 'The Zlib License', 'This project is unlicensed']
        },
        // Prompt for contributers to project
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list any contributing developers, third party assets, or material that provided significant instruction. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for tests for project
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any tests of that project that you have. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for github username
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
        // Prompt for email
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        }
    ])
};

questions()
.then(questionsInput => {
    return generateTemplate(questionsInput);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
})