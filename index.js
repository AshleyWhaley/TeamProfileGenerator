const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var tiles = []

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
            message: 'What is the employees name?'
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
            when: (data) => role === 'Manager'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did they attend?',
            when: (data) => role !== 'Manager' && data.role.indexOf('Intern') !=-1
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their Github username?',
            when: (data) => role !== 'Manager' && data.role.indexOf('Engineer') !=-1
        },
    ])
    .then((data) => {
        try {
            const name = data.name;
            const ID = data.ID;
            const email = data.email;
            const school = data.school;
            const github = data.github;
            const num = data.num;

            switch(data.role) {
                case 'Engineer':
                    employee = new Engineer(name, ID, email, github);
                    generateFile(employee);
                    break;
                case 'Intern':
                    employee = new Intern(name, ID, email, school);
                    generateFile(employee);
                    break;
                default:
                    employee = new Manager(name, ID, email, num);
                    generateFile(employee);
                    break;
            }

            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add another employee?',
                    default: true
                }
            ])
            .then((data) => {
                try {
                    (data.addEmployee) ? question() : generateFile();

                } catch (error) {
                    console.log(error);
                }
            })

        } catch (error) {
               console.log(error);
        }
    })
}

function generateFile(employee) {
    const name = employee.getName();
    const role = employee.getRole();
    const ID = employee.getID();
    const email = employee.getEmail();

    let card = `
    <div class="card">
        <div class="card-header bg-secondary">
            <h3 class="card-title"> ${name} </h3>
            <h5 class="card-subtitle mb-2"> ${role} </h5>
        </div>

    <div class="card-body">
        <div class="row">
            <div class="col">
                <p class="card-text"> ID: <p>
            </div>
            <div class="col">
                <p> ${ID} </p>
            </div>
        </div>
    </div>
    `;

    switch(role) {
        case 'Intern':
            const school = employee.getSchool();
            detail = `
            <div class="row">
                <div class="col">
                    <p class="card-text">School:</p>
                </div>
                <div class="col">
                    <p> ${school}</p>
                </div>
            </div>

            <div class="card-footer">
                <p id="email-text"><a target="_blank" href="mailto:${email}"> ${email}</a></p>
            </div>
            `;
            card += detail;
            break;

        case 'Engineer':
            const github = employee.getGithub();
            detail = `
            <div class="row">
                <div class="col">
                <p class="card-text">Github:</p>
            </div>
            
            <div class="col">
                <p><a target="_blank" href="https://github.com/${github}"> ${github}</a></p>
            </div>
            
            <div class="card-footer">
            <p id="email-text"><a target="_blank" href="mailto:${email}"> ${email}</a></p>
        </div>
            `;

            card += detail;
            break;

        case 'Manager':
            const num = employee.num;
            detail = `
            <div class="row">
                <div class="col">
                    <p class="card-text">Office Number:</p>
                </div>
                <div class="col">
                    <p> ${num}</p>
                </div>
            </div>

            <div class="card-footer">
                <p id="email-text"><a target="_blank" href="mailto:${email}"> ${email}</a></p>
            </div>
            `;

            card += detail;
            break;
    }

    tiles.push(card);
}

function generateFile() {
    let fileCard = tiles.join (' ');
    generateHTML(fileCard);
}

function generateHTML(fileCard) {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Dashboard</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid bg-dark text-light">
            <div class="container">
                <h1>Team Dashboard</h1>
                <p>“If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.” — John Gotti</p>
            </div>
        </div>
        <!--card deck-->
        <div class="container">
            <div class="card-deck">
                ${fileCard}
            </div>
        </div>
        <!--links-->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
    </body>
    </html>
    `;

    fs.writeFileSync('index.html', html);
    console.log('You have successfully created a profile for your team!');
}

inquirer.prompt([
    {
        name: 'salutation',
        message: 'Welcome to Team Dashboard Generator!',
    },
    {
        name: 'start',
        message: "Let's begin by entering the manager's information.",
    },
])
.then((data) => {
    var role ="Manager";
    question(role);
})