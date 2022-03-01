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

// START SERVER AFTER DATABASE CONNECTION
db.connect((err) => {
  if (err) throw err;
});

test();
