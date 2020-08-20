const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require ('inquirer');
const fs = require("fs");
const path = require("path")
const outputHTML = path.resolve(__dirname, "dist")
const teamHTML = path.join(outputHTML, "team.html")
const generatePage = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

function myTeamApp ()  {
    const newManager =() => {
        return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: managerNameInput => {
                    if (managerNameInput){
                        return true;
                    } else {
                        console.log('Please enter a name.')
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID?",
                validate: managerIdInput => {
                    if (isNaN(managerIdInput)){
                        console.log("Please enter a valid number");
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
                validate: function (managerEmailInput) {

                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmailInput)

                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office phone number?",
                validate: officeNumberInput => {
                    if (isNaN(officeNumberInput)){
                        console.log("Please enter a valid number");
                    } else {
                        return true;
                    }
                }
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerID);
            createTeam();
        });
        //TODO - Store manager object for use in HTML
    }

    function createTeam() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: "What kind of employee would you like to add?",
                choices: ['Engineer', 'Intern', 'None'],
            }
        ])
        .then(roleChoice =>{
            switch (roleChoice.role){
               case "Engineer":
                   addEngineer();
                   break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    myTeam();
            }
        });
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message:"What is the engineer's name?",
                validate: engineerNameInput => {
                    if (engineerNameInput){
                        return true;
                    } else {
                        console.log("Please enter the engineer's name")
                    }
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID?",
                validate: engineerIdInput => {
                    if (isNaN(engineerIdInput)){
                        console.log("Please enter a valid number");
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?",
                validate: function (engineerEmailInput) {
    
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmailInput)
    
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the employee's GitHub username?",
                validate: engineerGitHubInput => {
                    if (engineerGitHubInput){
                        return true;
                    } else {
                        console.log("Please enter GitHub username")
                        return false;
                    }
                }
            }
        ])
                // TODO - Create Engineer object from responses
                .then(answers => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
                    teamMembers.push(engineer);
                    idArray.push(answers.engineerId);
                    createTeam();
                });
                // TODO - Store Engineer Object for us in HTML
                // There can be multiple, don't overwrite save
    }
    function addIntern() {    
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message:"What is the intern's name?",
                validate: internNameInput => {
                    if (internNameInput){
                        return true;
                    } else {
                        console.log("Please enter the intern's name")
                    }
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID?",
                validate: internIdInput => {
                    if (isNaN(internIdInput)){
                        console.log("Please enter a valid number");
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?",
                validate: function (internEmailInput) {
    
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmailInput)
    
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Where does the intern go to school?",
                validate: internSchoolInput => {
                    if (internSchoolInput){
                        return true;
                    } else {
                        console.log("Please enter the intern's school information.")
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internID);
            createTeam();
        });
    }

    function myTeam() {
        if (!fs.existsSync(outputHTML)) {
            fs.mkdirSync(outputHTML)
        }
        fs.writeFileSync(teamHTML, generatePage(teamMembers), "utf-8");
    }
    
    newManager();
}

myTeamApp();
