let numLines = 10;
let lineLength = 50;

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(2);
  strokeCap(PROJECT);
  colorMode(HSB);
}

function draw() {
  background(220);
  let startX = width / 2 - ((numLines - 1) * lineLength) / 2;
  let startY = height / 2;
  for (let i = 0; i < numLines; i++) {
    let endX = startX + i * lineLength;
    let endY = startY - i * lineLength;
    if (mouseIsPressed) {
      stroke((i * 25) % 255, 255, 255);
    } else {
      stroke(255 - ((i * 25) % 255), 255, 255);
    }
    line(startX, startY, endX, endY);
  }
}

function mouseClicked() {
  numLines = floor(random(3, 20));
  lineLength = random(10, 100);
}
