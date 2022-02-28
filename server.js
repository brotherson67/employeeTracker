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
      console.log(answer);
      // console.log(answers);
      // const choice = answers.choices;
      // if (choice === "View departments") {
      //   console.log("they want to view the dept");
      //   router.get("/departments", (req, res) => {
      //     db.query(`SELECT * FROM department`, (err, result) => {
      //       if (err) {
      //         console.log("Sorry, looks like there was an error getting that.");
      //         res.status(500).json({ error: err.message });
      //         return;
      //       }
      //       res.json({
      //         message: "Nice, you got the departments",
      //         result: body,
      //       });
      //     });
      //   });
      // }
    });
};
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
    case "add a dept":
  }
});

// START SERVER AFTER DATABASE CONNECTION
db.connect((err) => {
  if (err) throw err;
});
