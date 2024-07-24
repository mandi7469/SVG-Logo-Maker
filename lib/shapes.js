class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.svg = "";
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.svg = 
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
 <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.svg = 
`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.svg = 
`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
