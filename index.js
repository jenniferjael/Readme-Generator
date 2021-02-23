// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
function projectQuestions() {
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
        name: "githubName",
      },
      {
        type: "input",
        message: "what is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the link to your github profile?",
        name: "githubProfile",
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
        type: "list",
        message: "What license is being used?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "None"],
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

      {
        type: "input",
        message: "What is your youtube link?",
        name: "youtube",
      },



    ])
    //fs.writeFile(file, data[, options], callback)
    // TODO: Create a function to write README file
    .then((responses) => {
      let badge = markdown.renderLicenseSection(responses.license);
      let profileName = `# ${responses.titleName} 
   ## Description
   ${responses.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   
   ## Installation
   ${responses.installation}

   ## Usage
   ${responses.usage}

   ## License
   ${responses.license}
   ${badge}

   ## Contributing Guidelines
   ${responses.guidelines}
  
   ## Tests
   ${responses.test}

   ## Questions
   ${responses.githubName}\n
   ${responses.email}\n
   ${responses.githubProfile}\n
   ${responses.contact}\n
   ${responses.youtube}`;
      console.log(profileName);
      fs.writeFile("README.md", profileName, (err) => {
        if (err) console.error(err);
      });
    });
}
projectQuestions();

//TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
