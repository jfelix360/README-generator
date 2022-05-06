// Load packages
const inquirer = require('inquirer');
const markdownTemplate = require('./src/markdownTemplate');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        {
            type: 'input',
            name: 'toc',
            message: 'Please enter a Table of Contents as a comma seperated list. (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('**// REQUIRED INPUT //**');
                    return false;
                }
            }
        },
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
        {
            type: 'input',
            name: 'license',
            message: 'What type of license does this project fall under?  (Required)',
            choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary']
        },
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();