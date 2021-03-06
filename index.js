const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var tile = []

function question(role){
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            messages: 'What role does the employee have?',
            choices: ['Engineer', 'Intern'],
            when: (data) => role !== 'Manager'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?',
        },
        {
            type: 'number',
            name: 'ID',
            message: 'What is their ID number?'
        },
        {
            input: 'input',
            name: 'email',
            message: 'What is their email?'
        },
        {
            type: 'number',
            name: 'num',
            message: 'What is their office number?',
            whne: (data) => role === 'Manager'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?',
            when: (data) => role !== 'Manager' && data.role.indexOf('Intern') !=-1
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is their Github username?',
            when: (data) => role !== 'Manager' && data.role.indexOf('Engineer') !=-1
        },
    ]);
    
}