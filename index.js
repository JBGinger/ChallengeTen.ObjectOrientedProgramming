const inquirer = require('inquirer');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const { choices } = require('yargs');

const promptForEmployeeData = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee first name.',
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log('You must enter a name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Please enter employee ID',
            validate: idEntered => {
                if (idEntered) {
                    return true;
                } else {
                    console.log('You must enter an ID!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employee role',
            message: 'Please select employee role',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleSelected => {
                if (roleSelected) {
                    return true;
                } else {
                    console.log('You must select a role!')
                    return false;
                }
            }
        }
    ])
}