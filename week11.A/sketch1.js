let circleSize = 50;

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(220);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = i * 40 + 20;
      let y = j * 40 + 20;
      if (mouseIsPressed) {
        fill(255 - (i * 25), 255, 255);
      } else {
        fill((i * 25), 255, 255);
      }
      ellipse(x, y, circleSize, circleSize);
    }
  }
}

function mouseClicked() {
  circleSize = random(10, 100);
}
