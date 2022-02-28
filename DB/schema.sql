USE election
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  dep_name VARCHAR(50) NOT NULL);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_name VARCHAR(15) NOT NULL,
    role_description TEXT NOT NULL,
    dep_id INTEGER
    CONSTRAINT fk_dep FOREIGN KEY (dep_id)
      REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    role_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id)
      REFERENCES roles(id) ON DELETE CASCADE
);