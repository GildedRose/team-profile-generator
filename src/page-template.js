const createTeam = team => {
    const createManagerHtml = Manager => {
        return `
        <div class="card employee-card">
        <div class="class-header">
            <h2>${Manager.getName()}</h2>
            <h3>${Manager.getRole()}</h3>
        </div>
        <div class="card-text">
            <ul class="info-list">
                <li class="info-item">ID: ${Manager.getId()}</li>
                <li class="info-item">Email: <a href="mailto:${Manager.getEmail()}>${Manager.getEmail()}</a></li>
                <li class="info-item">Phone Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
        `;
    };
    const createEngineerHtml = Engineer => {
        return `
        <div class="card employee-card">
        <div class="class-header">
            <h2>${Engineer.getName()}</h2>
            <h3>${Engineer.getRole()}</h3>
        </div>
        <div class="card-text">
            <ul class="info-list">
                <li class="info-item">ID: ${Engineer.getId()}</li>
                <li class="info-item">Email: <a href="mailto:${Engineer.getEmail()}>${Engineer.getEmail()}</a></li>
                <li class="info-item">GitHub: <a href="http://github.com/" + ${Engineer.getGitHub()}"> ${Engineer.getGitHub()}</a></li>
            </ul>
        </div>
        </div>
        `;
    };
    const createInternHtml = Intern => {
        return `
        <div class="card employee-card">
        <div class="class-header">
            <h2>${Intern.getName()}</h2>
            <h3>${Intern.getRole()}</h3>
        </div>
        <div class="card-text">
            <ul class="info-list">
                <li class="info-item">ID: ${Intern.getId()}</li>
                <li class="info-item">Email: <a href="mailto:${Intern.getEmail()}>${Intern.getEmail()}</a></li>
                <li class="info-item">School: ${Intern.getGitHub()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(Employee => Employee.getRole()==="Manager")
        .map(Manager => createManagerHtml(Manager))
        );
    html.push(team
        .filter(Employee => Employee.getRole() === "Engineer")
        .map(Engineer => createEngineerHtml(Engineer))
        .join("")
        );
    html.push(team
        .filter(Employee => Employee.getRole() === "Intern")
        .map(Intern => createInternHtml(Intern))
        .join("")
        );
}

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};