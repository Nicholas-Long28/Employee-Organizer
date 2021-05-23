const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password? : 'Pitt2021!',
    database? : 'company_db',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});

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

const employeeSearch = () => {
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
                switch (answer.action) {
                    case 'Lead Developer':
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
                        console.log(`Invalid action ${answer.action}`);
                }
            
        });
};