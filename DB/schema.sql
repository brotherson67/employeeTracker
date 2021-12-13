DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  dep_name VARCHAR(50) NOT NULL);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_name VARCHAR(15) NOT NULL,
    role_description TEXT NOT NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    -- create query using foreign keys to link this to the roles 
);