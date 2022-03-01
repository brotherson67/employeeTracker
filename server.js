const express = require("express");
const inquirer = require("inquirer");
// const inputCheck = require('./utils/inputCheck');
const db = require("./db/dbConnection");
const apiRoutes = require("./routes/apiRoutes");
const { getAllEmployees, getAllDepts, getAllRoles } = require("./utils");

const PORT = process.env.PORT || 3000;
const app = express();

const getEmployees = getAllEmployees();
const getDepts = getAllDepts();
const getRoles = getAllRoles();

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

// START SERVER AFTER DATABASE CONNECTION
db.connect((err) => {
  if (err) throw err;
});

test();
