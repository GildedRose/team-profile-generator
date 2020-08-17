const inquirer = require ('inquirer');
//const generateHTML = require('./dist/team.html')
//const { writeFile } = require('./src/generateSite.js')


//const teamApp = () => {}
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
        /*.then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.OfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam(); 
          }); */

    const createTeam = () => {
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
        ]).then(function (responses){
                if (responses.role = 1){
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "nameEngineer",
                            message:"What is the Engineer's name?",
                            validate: nameEngineerInput => {
                                if (nameEngineerInput){
                                    return true;
                                } else {
                                    console.log("Please enter the Engineer's name")
                                }
                            }
                        },
                    ])
                }
            }
        )
    };

/*//array of questions for user
const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name?",
            validate: employeeNameInput => {
                if (employeeNameInput){
                    return true;
                } else {
                    console.log('You need to enter a name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is their e-mail address?'
        },

    ]);
};

const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHub',
            message: "What is your GitHub username?",
        },
    ])
};

const intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: "Where do you go to school?",
        },
    ])
}; */

        

/*newEmployee()
    .then(roleQuestion)
        //when: (answers) => answers.roleInput === 'Manager',
    .then(intern)
    .then(engineer)
    .then(manager)
    .catch(err => {
        console.log(err);
    }); */

newManager()
    .then(createTeam);
