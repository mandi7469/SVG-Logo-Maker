const inquirer = require('inquirer');
const colors = require('colors');

const questions = [
    {
        type: 'input',
        message: 'Please enter up to three characters',
        name: 'characters',
      },
      {
        type: 'input',
        message: 'Please enter a color for the text',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Please select a shape',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        message: 'Please enter a color for the shape',
        name: 'shapeColor',
      },
      
];

inquirer
  .prompt(questions)
  .then((response) =>{
    console.log(response);
    // let markDown = generateMarkdown(response)
    // writeToFile('README.md', markDown)
  });

  