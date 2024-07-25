const {Circle, Triangle, Square} = require('./shapes.js')

describe('Circle', () => {
  test('should render a string for svg file with a blue shape color', () => {
    const shape = new Circle();
    shape.shapeColor = ('blue');
    expect(shape.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
 <circle cx="150" cy="100" r="90" fill="blue" />

 <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
  });
});


describe('Triangle', () => {
    test('should render a string for svg file with a pink shape color', () => {
      const shape = new Triangle();
      shape.shapeColor = ('pink');
      expect(shape.render()).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="pink" />

  <text x="144" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
    });
  });

  
  describe('Square', () => {
    test('should render a string for svg file with a orange shape color', () => {
      const shape = new Square();
      shape.shapeColor = ('orange');
      expect(shape.render()).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="150" fill="orange" />

  <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
    });
  });