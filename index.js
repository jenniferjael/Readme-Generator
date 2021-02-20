// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//fs.writeFile(file, data[, options], callback)
// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your title project?",
      name: "titleName",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "githubUsername",
    },
    {
      type: "input",
      message: "what is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "How can you be reached for more information?",
      name: "contact",
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "What is the installation process?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "What license is being used?",
      name: "license",
    },
    {
      type: "input",
      message: "What are the contributing guidelines?",
      name: "guidelines",
    },
    {
      type: "input",
      message: "What command should be used to run a test?",
      name: "email",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });

 
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    //fs.writeFile(fileName,data,function(err){
       // console.log(fileName),
       // console.log(data),
       // err? console.error(err): console.log("writen to file....")
    //})
//}

// TODO: Create a function to initialize app
//function init() {
    //inquirer.prompt(questions).then(data => {
       // writeToFile("README.md",data.message);
       // console.log(data);
    //})
//}

// Function call to initialize app
//init();
