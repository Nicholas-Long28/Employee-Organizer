const mysql = require('mysql');
const inquirer = require('inquirer');
const console = require('console');
//const { title } = require('node:process');

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
                'Select department in which the employee will be working in?',
                'Select the title in which the employee will have.',
                'What the employees salary be?',
                'What department will the manager belong too?',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'Select department in which the employee will be working in?':
                    departmentSearch();
                    break;

                case 'Select the title in which the employee will have.':
                    titleSearch();
                    break;

                case 'What the employees salary be?':
                    leadEngineerSearch();
                    break;

                case 'What department will the manager belong too?':
                    departmentIdSearch();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
            }
        });
};

//Prompts user for the position in their department
const departmentSearch = () => {
    inquirer
        .prompt({
            name: 'department',
            type: 'choices',
            message: 'What department does the employee belong too?',
            choices: [
                'UX',
                'Developers',
                'Managers',
                'Sales',
                'Engineers',
            ],
        })
        .then((answer) => {
                const query = 'SELECT id, department_Name FROM department';
                connection.query(query, { department: answer.department_Name }, (err, res) => {
                    res.forEach(({ id }) => {
                        console.log(
                            `ID: ${id} || Department: ${department_Name}`
                        );
                    });
                    runSearch();
                });
        });    
    
};

//Prompts user for employee id
const departmentIdSearch = () => {
    inquirer
        .prompt({
            name: 'input',
            type: 'number',
            message: 'What is the managers department id number?',
            validate: function(value) {
                var valid = !isNaN(parseFloat)(value);
                return valid || 'Please enter a number';
                runSearch();
            },
        })
};

//Prompts user for Department Id that they belong too
const titleSearch = () => {
    inquirer
        .prompt({
            name: 'title',
            type: 'choice',
            message: 'What is the employees title?',
            choices: [
                'Senior Developer',
                'Lead Engineer',
                'Intern',
                'Human Resources',
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
        }
    );
});
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
        };
});