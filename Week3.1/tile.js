function tile() {
    // Canvas
    createCanvas(200, 200);
  
    // Background square
    fill(255, 204, 0);
    rect(0, 0, width, height);
  
    // Shapes
    fill(255);
    ellipse(100, 100, 100, 100);
    triangle(50, 50, 150, 50, 100, 150);
    rect(25, 125, 50, 50);
    rect(125, 125, 50, 50);
  }
  
  function draw() {
    // Draw
    tile();
  
    // Stop
    noLoop();
  }