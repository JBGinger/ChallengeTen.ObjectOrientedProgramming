const { group } = require('console');
const fs = require('fs');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

class CreateFile {
    constructor(groupMembers) {
        this.groupMembers = groupMembers;
    }

    GeneratePage(groupMembers) {
        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" -->        
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">    
        <title>Employee Card Demo</title>
        </head>
    
        <body>
        <div class="container">
        <div class="headerblock">
            <h1>My Team</h1>
        </div>
        <div class="flex-row justify-space-around">
            ${groupMembers
                .map(({ name, id, email, role, officeNumber, github, school }) => {
                    var detail = "";
                    var icon = "fas ";
                    if (role == 'Manager') {
                        detail = `<p class="card-text">Office Number: ${officeNumber}</p></div></div></div>`;
                        icon += 'fa-coffee';
                    } 
                    else if (role == 'Engineer') {
                        detail = `<p class="card-text">GitHub: <a target="_blank" href="${github}">${github}</a></p></div></div></div>`;
                        icon += 'fa-glasses';
                    }
                    else {
                        detail = `<p class="card-text">School: ${school}</p></div></div></div>`;
                        icon += 'fa-graduation-cap';
                    }
                    var main = `
                        <div class="col-4">
                            <div class="card" style="width: 18rem;">
                                <div class="card-header"> 
                                    <h5 class="card-title">${name}</h5>
                                    <i class="${icon}"></i> ${role}
                                </div>
                                <div class="card-body">
                                    <p class="card-text">ID: ${id}</p>
                                    <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>`;
                    return main + detail;                        
                })
                .join('')}
        </div>
        </div>
        </body>
        </html>
        `;
    };

    CreateHTMLPage() {
        fs.writeFile('./dist/index.html', this.GeneratePage(this.groupMembers), err => {
            if (err) throw err;
            console.log('File output complete! Check out index.html to see the output!');
        });
    }
}

module.exports = CreateFile;