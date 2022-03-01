const express = require("express");
const inquirer = require("inquirer");
// const inputCheck = require('./utils/inputCheck');
const db = require("./db/dbConnection");

const { dept, role, employee } = require("./classes");
const {
  deptArrFill,
  roleArrFill,
  employeeArrFill,
} = require("./utils/toArray.js");
const { getDept, getRoles, getEmployees } = require("./utils/getTables.js");
const { newDept, newRole, newEmployee } = require("./utils/addData.js");
const {
  updateRole,
  updateManager,
  deleteDept,
  deleteRole,
  deleteEmployee,
} = require("./utils/changeData");

// Array of data
let deptArr = deptArrFill();
let roleArr = roleArrFill();
let employeeArr = employeeArrFill();

// Array of objects
let departments = getDept();
let roles = getRoles();
let employees = getEmployees();

const initPrompt = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "update an employee's manager",
        "delete a department",
        "delete a role",
        "delete an employee",
        "quit",
      ],
    })
    .then((ans) => {
      return ans;
    });
};
//if add dept is chosen
const addDept = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
        validate: function (name) {
          if (!name) {
            console.log("You must enter a name!");
            return false;
          }
          return true;
        },
      },
    ])
    .then((ans) => {
      const department = new Department(ans.name);
      newDept(department);
      console.log("Department Added!");
      departments = getDept();
      deptArr = deptArrFill();
      return init();
    });
};

const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the role?",
        validate: function (title) {
          if (!title) {
            console.log("You must enter a name!");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
        validate: function (salary) {
          if (!isNaN(salary)) {
            return true;
          } else {
            console.log("You must enter a salary number!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "department",
        message: "What department does the role belong to?",
        choices: deptArr,
      },
    ])
    .then((ans) => {
      const role = new Roles(ans.title, ans.salary, ans.department);
      newRole(role);
      console.log("Role Added!");
      roles = getRoles();
      roleArr = roleArrFill();
      return init();
    });
};

const PORT = process.env.PORT || 3000;
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// START SERVER AFTER DATABASE CONNECTION
db.connect((err) => {
  if (err) throw err;
});
