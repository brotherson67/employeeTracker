const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');
const Choices = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
        {
            name: "toDo",
            type: "list",
            message: "What would you like to do?",
            choices: ["View departments", 'View all roles', "View all employees", 'Add a department', 'Add a role', 'Add an employee', 'Update an employees role']
        }
    ])
    .then(answers => {
        console.log(answers);
        const table = answers.table;
        const method = answers.method;
         
    })
