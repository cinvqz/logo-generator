// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render', () => {
  const shape = new Triangle('red');
  const svg = shape.render('A', 'white');
  expect(svg).toContain('<polygon points="150,10 10,190 290,190" fill="red" />');
});

test('Circle render', () => {
  const shape = new Circle('blue');
  const svg = shape.render('B', 'white');
  expect(svg).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square render', () => {
  const shape = new Square('green');
  const svg = shape.render('C', 'white');
  expect(svg).toContain('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
