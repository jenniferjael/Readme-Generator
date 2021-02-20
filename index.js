// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];
function projectQuestions(){
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
      message: "What is the description of the project?",
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
      name: "test",
    },
  ])
  //fs.writeFile(file, data[, options], callback)
  // TODO: Create a function to write README file
  .then((responses) => {
   const{titleName,githubUsername,email,contact,description,installation,usage,license,guidelines,test} = responses;
   console.log(responses);
   let profileName = `"${titleName}", "${githubUsername}, "${email}"`;
   console.log(profileName);
   fs.writeFile("README.md",profileName,err=>{
     if(err) console.error(err);
   });
  });

}
projectQuestions()

//TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
