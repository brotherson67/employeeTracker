const express = require("express");
const inquirer = require("inquirer");
// const inputCheck = require('./utils/inputCheck');
const db = require("./db/dbConnection");

const { dept, role, employee } = require("./classes");
const {
  deptArrFill,
  roleArrFill,
  employeeArrFill,
} = require("./utils/toArray");
const { getDept, getRoles, getEmployees } = require("./utils/getTables");
const { newDept, newRole, newEmployee } = require("./utils/addData");
const {
  updateRole,
  updateManager,
  deleteDept,
  deleteRole,
  deleteEmployee,
} = require("./utils/alterData");

const PORT = process.env.PORT || 3000;
const app = express();

// Array of data
let deptArr = deptArrFill();
let roleArr = roleArrFill();
let employeeArr = employeeArrFill();

// Array of objects
let departments = getDept();
let roles = getRoles();
let employees = getEmployees();

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE apiRoutes
app.use("/api", apiRoutes);
firstPrompt = () => {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employees role",
        ],
      },
    ])
    .then((answer) => {
      return answer;
    });
};
const test = () => {
  firstPrompt().then((answer) => {
    switch (answer.choice) {
      case "View departments":
        console.table(getDepts);
        return;
      case "View all roles":
        console.table(getRoles);
        return;
      case "View all employees":
        console.table(getEmployees);
        return;
    }
  });
};

// START SERVER AFTER DATABASE CONNECTION
db.connect((err) => {
  if (err) throw err;
});

test();
