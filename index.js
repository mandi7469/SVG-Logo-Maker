// imports necessary modules
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter text for logo. (Must not be more than 3 characters",
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

// creates the shape object based on user input
inquirer.prompt(questions).then((response) => {
  let shape = "";
  if (response.shape == "Circle") {
    shape = new Circle(response.text, response.textColor, response.shapeColor);
  } else if (response.shape == "Square") {
    shape = new Square(response.text, response.textColor, response.shapeColor);
  } else if (response.shape == "Triangle") {
    shape = new Triangle(
      response.text,
      response.textColor,
      response.shapeColor
    );
  }

  // creates svg file with shape data
  console.log(response);
  fs.writeFile("logo.svg", shape.render(), (err) =>
    err ? console.log(err) : console.log("Generated logo.svg!")
  );
});
