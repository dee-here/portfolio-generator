const fs = require('fs');
const inquirer = require('inquirer'); 

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your name',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Enter your location',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Enter your Bio text',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter your LinkedIn Url',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'Enter your GitHub Url',
        name: 'gitHub',
    },


])
.then( answers => {
    ///i have all the values..  append to litersl ?
    console.log("answers : ", answers);

    const output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
      <div>name:${answers.userName}</div>  
      <div>location:${answers.location}</div>  
      <div>bio:${answers.bio}</div> 
      <a href="${answers.linkedIn}">LinkedIn: </a>  
      <a href="${answers.gitHub}">GitHub: </a>  
        
    </body>
    </html>
`
console.log("output is:", output);

fs.writeFile("portfolio.html", output, (err) => {
    if(err) {
        throw(err);
    }
    console.log("portfolio.html successfully created.");
});

});