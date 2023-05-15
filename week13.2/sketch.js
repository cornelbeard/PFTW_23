let angle = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  // sine waves
  beginShape();
  for (let x = -width/2; x <= width/2; x += 10) {
    let y = sin(angle + x/50) * 50;
    vertex(x, y);
  }
  endShape();
  
  angle += 0.1; // increment the angle for each frame
}
