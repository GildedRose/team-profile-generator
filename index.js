const inquirer = require ('inquirer');
//const generateHTML = require('./dist/team.html')
//const { writeFile } = require('./src/generateSite.js')

//array of questions for user
const newEmployee = () => {
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office phone number?",
            when: (answers) => answers.roleInput === 'Manager',
        },
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

const roleQuestion = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: "What is the Employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput){
                    return true;
                } else {
                    console.log('Please select a role.');
                    return false;
                }
            } 
        }
    ])
};

const manager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'phoneNumber',
            message: "What is the manager's phone number?",
        },
    ])
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
};

newEmployee()
    .then(roleQuestion)
    .then(intern)
    .then(engineer)
    .then(manager)
    .catch(err => {
        console.log(err);
    });
