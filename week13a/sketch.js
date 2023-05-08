let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 500; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(30, 50, 100); 
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
    this.thickness = map(this.z, 0, 20, 1, 2);
    this.color = color(150, 200, 255); 
  }

  fall() {
    this.y = this.y + this.yspeed;
    let gravity = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + gravity;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 1, 20);
    }
  }

  show() {
    strokeWeight(this.thickness);
    stroke(this.color);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
