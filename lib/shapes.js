class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 10,190 290,190" fill="${this.color}" />
        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  