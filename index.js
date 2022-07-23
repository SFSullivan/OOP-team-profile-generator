const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const createTeam = require('./src/html-template.js');

wholeTeam = [];

function runApp () {

    function gatherTeam () {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee are you adding to your team?",
            name: "addEmployee",
            options: ["Manager", "Engineer", "Intern", "No team members are required."]
        }]).then(function (userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
}

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Who is the manager of this team?"
        },
        {
            type:"input",
            name:"managerEmail",
            message:"What is the manager's email?"
        },
        {
            type:"input",
            name:"managerID",
            message:"What is the manager's ID number?"
        },
        {
            type:"input",
            name:"managerOfficeNumber",
            message:"What is the manager's office number?"
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerEmail, answers.managerId, answers.managerOfficeNumber)
        teamArray.push(manager);
        gatherTeam();
    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type:"input",
            name:"engineerId",
            message:"What is the engineer's ID number?"
        },
        {
            type:"input",
            name:"engineerEmail",
            message:"What is the engineer's email?"
        },
        {
            type:"input",
            name:"engineerGitHub",
            message:"What is the engineer's GitHub profile name?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        gatherTeam();
    });
}

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type:"input",
            name:"internEmail",
            message:"What is the intern's email?"
        },
        {
            type:"input",
            name:"interId",
            message:"What is the inter's ID number?"
        },
        {
            type:"input",
            name:"internSchool",
            message:"What school is the intern attending?"
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internEmail, answers.internId, answers.internSchool)
        teamArray.push(intern);
        gatherTeam();
    });
}

}