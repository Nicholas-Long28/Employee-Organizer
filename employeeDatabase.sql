/* Creates database and allows the using of tables we create*/
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

/* Creates table for each employee*/
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER(10) NOT NULL,
    manager_id INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
);

/* Creates table for employees position within the company*/
CREATE TABLE job(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT(10) NOT NULL,
    employee_id(30)INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    PRIMARY KEY (id)
);

/* Creates table for the departments in which the employees work*/
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    department_Name VARCHAR(30),
    jobs_id(30)INTEGER NOT NULL,
    FOREIGN KEY (jobs_id) REFERENCES job(id), 
    PRIMARY KEY (id)
);

/*Inserting data into the tables*/
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Nick', 'Long', 1, NULL);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Rich', 'Jones', 2, 3);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Clay', 'Birds', 3, 4);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('Hope', 'Evans', 4, 5);

INSERT INTO job (title, salary, department_id) VALUES ('Developers', 100000.00, 1);
INSERT INTO job (title, salary, department_id) VALUES ('Engineers', 80000.00,2);
INSERT INTO job (title, salary, department_id) VALUES ('Interns', 60000.0, 3);
INSERT INTO job (title, salary, department_id) VALUES ('Human Resources', 50000.00, 4);

INSERT INTO department (department_Name) VALUES ('UX');
INSERT INTO department (department_Name) VALUES ('Developers');
INSERT INTO department (department_Name) VALUES ('Managers');
INSERT INTO department (department_Name) VALUES ('Engineers');




SELECT * FROM employee;
SELECT * FROM position;
SELECT * FROM department;



