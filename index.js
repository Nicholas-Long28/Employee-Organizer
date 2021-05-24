const mysql = require('mysql');
const inquirer = require('inquirer');
const console = require('console');
const { title } = require('node:process');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password : 'Pitt2021!',
    database : 'company_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to mysql server!');
    runSearch();
});

//Prompts user for input on which department they belong too
const runSearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'Which department does the employee belong too?',
            choices: [
                'UX',
                'Developers',
                'Managers',
                'Engineers',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'UX':
                    uxSearch();
                    break;
                case 'Developers':
                    developerSearch();
                    break;
                case 'Managers':
                    managerSearch();
                    break;
                case 'Engineers':
                    engineerSearch();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
            }
        });
};

//Prompts user for the position in their department
const uxSearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'Which title does the employee have?',
            choices: [
                'Lead Developer',
                'Sales',
                'Lead Engineer',
                'Office Manager',
                'Junior Developer',
            ],
        })
        .then((answer) => {
                const query = 'SELECT id, title FROM job';
                connection.query(query, { title: answer.title }, (err, res) => {
                    res.forEach(({ id }) => {
                        console.log(
                            `ID: ${id} || Title: ${title}`
                        );
                    });
                    runSearch();
                    /*case 'Lead Developer':
                        leadDeveloperSearch();
                        break;

                    case 'Sales':
                        salesSearch();
                        break;

                    case 'Lead Engineer':
                        leadEngineerSearch();
                        break;

                    case 'Office Manager':
                        officeManagerSearch();
                        break;

                    case 'Junior Developer':
                        juniorDeveloperSearch();
                        break;

                    default:
                        console.log(`Invalid action ${answer.action}`);*/
                });
        });    
    
};

//Prompts user for employee id
const thirdPrompt = () => {
    inquirer
        .prompt({
            name: 'input',
            type: 'number',
            message: 'What is the employees Id number?',
            validate: function(value) {
                var valid = !isNaN(parseFloat)(value);
                return valid || 'Please enter a number';
                runSearch();
            },
        })
};

//Prompts user for Department Id that they belong too
const fourthPrompt = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'Which department id does the employee belong too?',
            choices: [
                '1',
                '2',
                '3',
                '4',
            ],
        })
    .then((answer) => {
        switch (answer.action) {
            case '1':
                uxSearch();
                break;

            case '2':
                developerSearch();
                break;

            case '3':
                managerSearch();
                break;

            case '4':
                engineerSearch();
                break;

            default:
                console.log(`invalid action ${answer.action}`);
                break;
        }
    });
};

//Prompts user for desired salary for the employee
const fifthPrompt = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What is the employees salary?',
            choices: [
                '60000',
                '75000',
                '90000',
                '110000',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case '60000':
                    salaryInput();
                    break;

                case '75000':
                    salaryInput();
                    break;

                case '90000':
                    salaryInput();
                    break;

                case '110000':
                    salaryInput();
                    break;
            }
        });
};

//Prompt for employee name
const employeeName = () => {
    inquirer
      .prompt({
        name: 'Employee Name',
        type: 'input',
        message: 'What is the employees name?',
      })
      .then((answer) => {
        const query = 'SELECT first_name, last_name, WHERE ?';
        connection.query(query, { employees: answer.first_name }, (err, res) => {
          res.forEach(({ first_name, last_name }) => {
            console.log(
              `Employee name: ${first_name} || Last name: ${last_name} `
            );
          });
          runSearch();
        });
      });
  };

//Prompt for role id
const role = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What is the role id for the employee?',
            choices: [
                '1',
                '2',
                '3',
                '4',
            ],
        })
    .then((answer) => {
        switch (answer.action) {
            case '1':
                uxSearch();
                break;

            case '2':
                developerSearch();
                break;

            case '3':
                managerSearch();
                break;

            case '4':
                engineerSearch();
                break;

            default:
                console.log(`invalid action ${answer.action}`);
                break;
        }
    });
};

//Prompt for manager id
const managerPrompt = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What is the managers id number?',
            choices: [
                '1',
                '2',
                '3',
                '4',
            ],
        })
    .then((answer) => {
        switch (answer.action) {
            case '1':
                uxSearch();
                break;

            case '2':
                developerSearch();
                break;

            case '3':
                managerSearch();
                break;

            case '4':
                engineerSearch();
                break;

            default:
                console.log(`invalid action ${answer.action}`);
                break;
        }
    });
};

//Prompt for job id
const jobPrompt = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What is the job id for the respective employee?',
            choices: [
                '1',
                '2',
                '3',
                '4',
            ],
        })
    .then((answer) => {
        switch (answer.action) {
            case '1':
                uxSearch();
                break;

            case '2':
                developerSearch();
                break;

            case '3':
                managerSearch();
                break;

            case '4':
                engineerSearch();
                break;

            default:
                console.log(`invalid action ${answer.action}`);
                break;
        }
    });
};
