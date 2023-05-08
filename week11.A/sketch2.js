let angle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(220);
  let x = width / 2;
  let y = height / 2;
  let radius = mouseX;
  let numPoints = mouseY / 10;
  let angleIncrement = TWO_PI / numPoints;
  for (let i = 0; i < numPoints; i++) {
    let currentAngle = angle + i * angleIncrement;
    let xPos = x + radius * cos(currentAngle);
    let yPos = y + radius * sin(currentAngle);
    if (mouseIsPressed) {
      fill((i * 15) % 255, 255, 255);
    } else {
      fill(255 - ((i * 15) % 255), 255, 255);
    }
    ellipse(xPos, yPos, 20, 20);
  }
  angle += 0.05;
}

function mouseClicked() {
  background(220);
}
