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
}