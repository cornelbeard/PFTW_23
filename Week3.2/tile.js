function createTile(posX, posY, tileSize, primaryColor, secondaryColor, circleColor, triangleColor) {
  push();
  translate(posX, posY);
  fill(primaryColor);
  rect(0, 0, tileSize, tileSize);
  noStroke();
  fill(secondaryColor);
  circle(tileSize / 2, tileSize / 2, tileSize / 2);
  fill(circleColor);
  strokeWeight(tileSize / 20);
  circle(tileSize / 2, tileSize / 2, tileSize / 2 - tileSize / 10);
  fill(triangleColor);
  noStroke();
  triangle(tileSize / 2, tileSize / 4, tileSize / 4, tileSize * 3 / 4, tileSize * 3 / 4, tileSize * 3 / 4);
  pop();
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  const tileSize = width / 3;
  createTile(0, 0, tileSize, "#FF6961", "#FFD700", "#6A5ACD", "#FFFFFF");
  createTile(tileSize, 0, tileSize, "#2E8B57", "#BA55D3", "#CD5C5C", "#FFFFFF");
  createTile(tileSize * 2, 0, tileSize, "#ADD8E6", "#FFA07A", "#6B8E23", "#FFFFFF");
  createTile(0, tileSize, tileSize, "#FF8C00", "#4169E1", "#B22222", "#FFFFFF");
  createTile(tileSize, tileSize, tileSize, "#FF69B4", "#8B008B", "#2F4F4F", "#FFFFFF");
  createTile(tileSize * 2, tileSize, tileSize, "#90EE90", "#D2691E", "#FFD700", "#FFFFFF");
  createTile(0, tileSize * 2, tileSize, "#F0E68C", "#00008B", "#FFA500", "#FFFFFF");
  createTile(tileSize, tileSize * 2, tileSize, "#00FA9A", "#8A2BE2", "#FFD700", "#FFFFFF");
  createTile(tileSize * 2, tileSize * 2, tileSize, "#87CEEB", "#FF69B4", "#6A5ACD", "#FFFFFF");
}
