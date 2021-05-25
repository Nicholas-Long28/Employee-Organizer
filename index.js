const mysql = require('mysql');
const inquirer = require('inquirer');
const console = require('console');
//const { title } = require('node:process');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'Pitt2021!',
    database: 'company_db',
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
            message: 'What would you like to do?',
            choices: [
                'Add new employee.',
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
                    salarySearch();
                    break;

                case 'What department will the manager belong too?':
                    departmentIdSearch();
                    break;
                case 'Add new employee.':
                    getNewEmployee();
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
            type: 'list',
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
            const query = 'SELECT id, department_Name FROM department WHERE ?';
            connection.query(query, { department_Name: answer.department }, (err, res) => {
                res.forEach(({ id, department_Name }) => {
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
            name: 'Department ID',
            type: 'list',
            message: 'What is the managers department id number?',
            choices: [
                '1',
                '2',
                '3',
                '4,'
            ],
        })
        .then((answer) => {
            const query = 'SELECT id, department_id FROM job';
            connection.query(query, { job: answer.department_id }, (err, res) => {
                res.forEach(({ department_id }) => {
                    console.log(
                        `ID ${id} || Department id: ${department_id}`
                    );
                });
                runSearch();
            });
        });


};

//Prompts user for Department Id that they belong too
const titleSearch = () => {
    inquirer
        .prompt({
            name: 'title',
            type: 'list',
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
            connection.query('SELECT * FROM job WHERE ?', { title: answer.title }, (err, res) => {
                console.log(res);
                res.forEach(({ id }) => {
                    console.log(
                        `ID: ${res[0].id} || Title: ${res[0].title}`
                    );
                });
                runSearch();
            });
        });
};
//Prompts user for desired salary for the employee
const salarySearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
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
                    runSearch();
                    break;

                case '75000':
                    runSearch();
                    break;

                case '90000':
                    runSearch();
                    break;

                case '110000':
                    runSearch();
                    break;
            }
        });
};

//Prompt for employee name
const getNewEmployee = () => {
    const query = 'SELECT first_name FROM employees WHERE ?';
    connection.query(query, { jobs_id: 5 },(err, res) => {
            const Managers = res;
            const Jobs = 'random' 
            inquirer
                .prompt([
                    {
                        name: 'EmployeeName',
                        type: 'input',
                        message: 'What is the employees name?'
                    },
                    {
                        message: 'What is the employees manager id?',
                        name: 'ManagerId',
                        type: 'list',
                        choices: Managers
                    },
                    {
                        message: 'What is the employees job id?',
                        type: 'list',
                        choices: Jobs
                    }
                ])
                .then((answer) => {
                    const query = 'INSERT INTO EMPLOYEES SET ?';
                    let first_name, last_name;
                    first_name = answer.EmployeeName.split(' ');
                    last_name = first_name[1];
                    first_name = first_name[0];
                    connection.query(query, { first_name: answer.first_name, last_name: answer.last_name }, (err, res) => {
                        res.forEach(({ first_name, last_name }) => {
                            console.log(
                                `Employee name: ${first_name} || Last name: ${last_name} `
                            );
                        });
                        runSearch();
                    });
                });
        })
};

const getAllManagers = () => {
    const query = 'SELECT * FROM EMPLOYEES WHERE ?';
    connection.query(query, { jobs_id: 5 })
        .then((err, res) => {
            return res;
        })
}
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
}