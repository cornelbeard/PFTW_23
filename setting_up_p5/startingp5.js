function setup() {
    createCanvas(1920, 1080);
  }
  
  function draw() {
    stroke('FF00FF')
    line(10,10,20,20)
    stroke(random(255), random(255), random(255));
    fill('black')
    circle(mouseX, mouseY, random(25))
  }