let squareSize = 50; // size of the square
let x = 0; // x coordinate of the square
let y = 0; // y coordinate of the square
let speed = 5; // speed of the square
let bgColor = 0; // background color of the canvas
let squareColor = [255, 0, 0]; // color of the square

function setup() {
  createCanvas(400, 400);
  setInterval(moveSquare, 20); // move the square every 20 milliseconds
}

function moveSquare() {
  // update the position of the square
  x += speed;
  if (x > width) { // if the square goes out of the canvas, move to the next row
    x = 0;
    y += squareSize;
  }
  if (y > height) { // if the square goes beyond the canvas, stop the interval
    clearInterval();
  }
  
  // draw the square with the updated position and color
  fill(squareColor);
  rect(x, y, squareSize, squareSize);
}

function keyPressed() {
  // change the color of the square when a key is pressed
  squareColor = [random(255), random(255), random(255)];
}

