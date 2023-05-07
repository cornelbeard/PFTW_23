function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
      } else {
        fill((i + j) * 20, (i + j) * 20, 0);
      }
      rect(i * 40, j * 40, 40, 40);
    }
  }
}
