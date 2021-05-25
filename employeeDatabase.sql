/* Creates database and allows the using of tables we create*/
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;


SELECT * FROM employees WHERE jobs_id = 5;
/* Creates table for the departments in which the employees work*/
CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    department_Name VARCHAR(30),
    PRIMARY KEY (id)
);

/* Creates table for employees position within the company*/
CREATE TABLE job(
    id INT AUTO_INCREMENT NOT NULL ,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT(10) NOT NULL,
    employee_id INT(30) NOT NULL,
    PRIMARY KEY (id)
);

/* Creates table for each employee*/
CREATE TABLE employees(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER(10) NOT NULL,
    manager_id INTEGER(10) NOT NULL,
    jobs_id INT NOT NULL,
    PRIMARY KEY (id)
);



/*Inserting data into the tables*/
INSERT INTO employees(first_name, last_name, roles_id, manager_id, jobs_id) VALUES ('Nick', 'Long', 1, 1, 1);
INSERT INTO employees(first_name, last_name, roles_id, manager_id, jobs_id) VALUES ('Rich', 'Jones', 2, 3, 2);
INSERT INTO employees(first_name, last_name, roles_id, manager_id, jobs_id) VALUES ('Clay', 'Birds', 3, 4, 3);
INSERT INTO employees(first_name, last_name, roles_id, manager_id, jobs_id) VALUES ('Hope', 'Evans', 4, 5, 4);

INSERT INTO job (title, salary, department_id, employee_id) VALUES ('Developers', 100000.00, 1, 1);
INSERT INTO job (title, salary, department_id, employee_id) VALUES ('Engineers', 80000.00,2, 2);
INSERT INTO job (title, salary, department_id, employee_id) VALUES ('Interns', 60000.0, 3, 3);
INSERT INTO job (title, salary, department_id, employee_id) VALUES ('Human Resources', 50000.00, 4, 4);

INSERT INTO department (department_Name) VALUES ('UX');
INSERT INTO department (department_Name) VALUES ('Developers');
INSERT INTO department (department_Name) VALUES ('Managers');
INSERT INTO department (department_Name) VALUES ('Engineers');




SELECT * FROM employees;
SELECT * FROM job;
SELECT * FROM department;

SELECT title, salary, department_id, employee_id
FROM job
RIGHT JOIN department ON job.employee_id = employee_id;

SELECT first_name, last_name, roles_id, manager_id, jobs_id
FROM employees 
RIGHT JOIN job ON employees.jobs_id = jobs_id;


