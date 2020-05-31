DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE emps (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    first_Name VARCHAR(30) NOT NULL,
    last_Name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER(11) NOT NULL,
    manager VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO emps (first_name, last_name, title, department, salary, manager)
VALUES ('paul', 'mccartney', 'lead guitar', 'beatles', 10000, 'brian epstein');

INSERT INTO emps (first_name, last_name, title, department, salary, manager)
VALUES ('george', 'harrison', 'lead guitar', 'beatles', 10000, 'brian epstein');

INSERT INTO emps (first_name, last_name, title, department, salary, manager)
VALUES ('ringo', 'starr', 'drums', 'beatles', 5000, 'brian epstein');

-- INSERT INTO emps (first_name, last_name, title, department, salary, manager)
-- VALUES ('john', 'lennon', 'vocals', 'beatles', 15000, 'brian epstein');

INSERT INTO emps (first_name, last_name, title, department, salary, manager)
VALUES ('mick', 'jagger', 'vocals', 'rolling stones', 20000, 'andrew loog oldham');

INSERT INTO emps (first_name, last_name, title, department, salary, manager)
VALUES ('keith', 'richards', 'lead guitar', 'rolling stones', 15000, 'andrew loog oldham');

SELECT * FROM emps;