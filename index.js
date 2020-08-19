const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require ('inquirer');
const { writeFile, copyFile } = require('./src/generate-site.js')
const generatePage = require('./src/page-template.js')

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
};

const createTeam = teamData => {
    if (!teamData.company){
        teamData.company =[];
    }
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: "What kind of employee would you like to add?",
            choices: ['Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput){
                    return true;
                } else {
                console.log('Please select a role.');
                return false;
                }
            }
        },
    ])    
    .then(function (responses){
        if (responses.role == 'Engineer'){
            return inquirer.prompt([
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
                },
            ])
        }
        else if (responses.role == 'Intern'){
            return inquirer.prompt([
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
                },
                {
                    type: "confrim",
                    name: "newEmployee",
                    message: "Would you like to add a new employee?",
                    default: false
                },
            ])
            .then(newTeamData => {
                teamData.company.push(newTeamData);
                if (newTeamData.confrimAddEmployee) {
                return createTeam(teamData);
                } else {
                    return teamData;
                }
            });
        };
    })      
};




/* newManager()
    .then(createTeam)
    .then(function loop(){
        createTeam().then(loop);
    });
*/

newManager()
	.then(createTeam)
	.then(teamData => {
		return generatePage(teamData);
	})
	.then(pageHTML => {
		return writeFile(pageHTML);
	})
	.then(writeFileResponse => {
		console.log(writeFileResponse);
		return copyFile();
	})
	.then(copyFileResponse => {
		console.log(copyFileResponse);
	})
	.catch(err => {
		console.log(err);
	});
