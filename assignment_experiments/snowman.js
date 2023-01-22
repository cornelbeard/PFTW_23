let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "black");
let stroke2 = prompt("enter a basic color name in lowercase", "black");
let fill1 = prompt("enter a basic color name in lowercase", "white");
function setup() {
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  // background(grid)
  // hills
  fill(fill1);
  noStroke();
  ellipse(250, 800, 800, 500);
  ellipse(750, 700, 800, 600);
  //house
  fill("brown")
  quad(950, 300, 750, 300, 750, 500, 950, 500);
  //house door
  fill("pink")
  quad(875, 425, 825, 425, 825, 500, 875, 500);
  // door knob
  stroke(0);
  strokeWeight(5);
  point(865, 465);
  
  // snowman
  fill(fill1);
  strokeWeight(20);
  stroke(stroke1);
  // lower body
  ellipse(500, 650, 450);
  // body
  ellipse(500, 450, 350);
  // head
  ellipse(500, 200, 200);
  // hat brim
  stroke(stroke2);
  strokeWeight(40);
  line(400, 120, 600, 120);
  fill(stroke2);
  // hat body
  quad(400, 50, 600, 50, 550, 120, 450, 120);
  // eyes
  stroke(0);
  strokeWeight(50);
  point(425, 200);
  point(575, 200);
  // jacket buttons
  stroke(0);
  strokeWeight(30);
  point(500, 350);
  point(500, 450);
  point(500, 550);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 200, 80, 80, 0, HALF_PI);

}