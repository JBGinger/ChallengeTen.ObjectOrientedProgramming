const inquirer = require('inquirer');
let employeeType = 'Employee';
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const CreateFile = require('./src/create-file');

var groupMembers = [];

var baseQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter a name!')
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter an ID!')
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter an email!')
            return false;
        }
    }
    }
];

var managerQuestions = [...baseQuestions];
managerQuestions.push({
        type: 'input',
        name: 'officeNumber', 
        message: 'Please enter employee office number.',
        validate: value => {
          if (value) {
              return true;
          } else {
              console.log('You must enter an office number!')
              return false;
          }
        }
    })

var engineerQuestions = [...baseQuestions];
engineerQuestions.push({
    type: 'input',
    name: 'github', 
    message: 'Please enter employee GitHub Repository.',
    validate: value => {
      if (value) {
          return true;
      } else {
          console.log('You must enter a github repository!')
          return false;
      }
    }
});

var internQuestions = [...baseQuestions];
internQuestions.push({
    type: 'input',
    name: 'school', 
    message: 'Please enter employee school.',
    validate: value => {
      if (value) {
          return true;
      } else {
          console.log('You must enter a school!')
          return false;
      }
    }
});

inquirer.prompt(
    managerQuestions
).then((answers) => {
    groupMembers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    promptForEmployee();
});

function promptForEmployee() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role',
            choices: ['Engineer', 'Intern', 'Finished'],
            validate: roleSelected => {
                if (roleSelected) {
                    return true;
                } else {
                    console.log('You must select a role!')
                    return false;
                }
            }
          }).then((answers) => {
              if (answers.role == "Engineer") {
                promptForEngineer();
              }
              else if (answers.role == "Intern") {
                promptForIntern();
              }
              else {
                  for (var i = 0; i < groupMembers.length; i++) {
                      if (groupMembers[i].getRole() == 'Manager') {
                        console.log('Manager: ' + groupMembers[i].name + " role: " + groupMembers[i].getRole());
                      }
                      else if (groupMembers[i].getRole() == 'Engineer') {
                        console.log('Engineer: ' + groupMembers[i].name + " role: " + groupMembers[i].getRole());
                      }
                      else {
                        console.log('Intern: ' + groupMembers[i].name + " role: " + groupMembers[i].getRole());
                      }
                  }
                var fileCreator = new CreateFile(groupMembers);
                fileCreator.CreateHTMLPage('Called From', 'Index.js');
              }
          })
}

function promptForEngineer () {
    inquirer.prompt(
        engineerQuestions
    ).then((answers) => {
        groupMembers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        promptForEmployee();
    });
}

function promptForIntern() {
    inquirer.prompt(
        internQuestions
    ).then((answers) => {
        groupMembers.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        promptForEmployee();
    });
}