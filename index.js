const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Please enter up to three characters",
    name: "text",
  },
  {
    type: "input",
    message: "Please enter a color for the text",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please select a shape",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Please enter a color for the shape",
    name: "shapeColor",
  },
];

inquirer.prompt(questions).then((response) => {
  let shape = "";
  if (response.shape == "Circle") {
    shape = new Circle(response.text, response.textColor, response.shapeColor);
  } else if (response.shape == "Square") {
    shape = new Square(response.text, response.textColor, response.shapeColor);
  } else if (response.shape == "Triangle") {
    shape = new Triangle(response.text, response.textColor, response.shapeColor);
  }

  console.log(response);
  fs.writeFile("logo.svg", shape.render(), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
  );
});
