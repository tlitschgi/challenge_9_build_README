// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//  List of questions for user input about the project/application
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide a title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How can users install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do users use your application?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your application?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// Create the README with the user input provided
function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions, please contact me:
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: ${answers.email}
  `;
}    

// Prompts questions and receives answers from user input
inquirer.prompt(questions).then((answers) => {
const readmeContent = generateReadme(answers);

// Write the README file; if there is an error, display error message
fs.writeFile('README.md', readmeContent, (err) => {
  if (err) {
    console.error('Error writing README.md:', err);
  } else {
    console.log('README.md has been successfully generated!');
  }
});
});

// Write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve('README.md has been successfully generated!');
        });
      });
}