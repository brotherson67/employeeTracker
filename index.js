const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');
const Choices = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
        {
            name: "table",
            type: "list",
            message: "What table would you like to access?",
            choices: ["Departments", 'Roles', "Employees"]
        },
        {
            name: "method",
            type: "list",
            message: "What are you trying to do?",
            choices: ["View", 'Update', "Create", 'Delete']
        }
    ])
    .then(answers => {
        console.log(answers);
    })
