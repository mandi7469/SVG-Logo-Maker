class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
 <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />

 <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
    render() {
      return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="144" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
    }

}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render () {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="150" fill="${this.shapeColor}" />

  <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
