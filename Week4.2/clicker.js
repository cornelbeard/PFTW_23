let shapeSize = 50;
let shapeX = 0;
let clickCount = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill(0, 0, 255);
  ellipse(shapeX, height/2, shapeSize, shapeSize);
  shapeX += 5;
  if (shapeX > width) {
    noLoop();
    textSize(32);
    textAlign(CENTER);
    text("Clicks: " + clickCount, width/2, height/2);
  }
}

function mouseClicked() {
  let d = dist(mouseX, mouseY, shapeX, height/2);
  if (d < shapeSize/2) {
    clickCount++;
  }
}
