// sketch.js
let shapes = [];

class Shape {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  render() {
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(10, 50);
    let h = random(10, 50);
    shapes.push(new Shape(x, y, w, h));
  }
}

function draw() {
  background(220);
  for (let shape of shapes) {
    shape.render();
    shape.move();
  }
}
