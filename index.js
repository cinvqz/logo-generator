// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let logoShape;

  switch (shape) {
    case 'Circle':
      logoShape = new Circle(shapeColor);
      break;
    case 'Triangle':
      logoShape = new Triangle(shapeColor);
      break;
    case 'Square':
      logoShape = new Square(shapeColor);
      break;
  }

  const svg = logoShape.render(text, textColor);

  fs.writeFile('logo.svg', svg, err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});
