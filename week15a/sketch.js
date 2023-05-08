let song;
let button;
let fft;
let drops = [];

function preload() {
  song = loadSound('dreamer.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  
  button = createButton('play');
  button.position(width/2 - button.width/2, height/2 - button.height/2);
  button.mousePressed(togglePlaying);
  
  fft = new p5.FFT();
  song.amp(0.2);
  
  for (let i = 0; i < 200; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    drops[i].checkBoundary();
  }
  
  if (song.isPlaying()) {
    let bass = fft.getEnergy("bass");
    let mid = fft.getEnergy("mid");
    let treble = fft.getEnergy("treble");
    let mapBass = map(bass, 0, 255, 0, 20);
    let mapMid = map(mid, 0, 255, 0, 20);
    let mapTreble = map(treble, 0, 255, 0, 20);
    for (let i = 0; i < drops.length; i++) {
      if (i % 3 == 0) {
        drops[i].wobble(mapBass, 0.5);
      } else if (i % 3 == 1) {
        drops[i].wobble(mapMid, 0.3);
      } else {
        drops[i].wobble(mapTreble, 0.1);
      }
    }
  }
}

function togglePlaying() {
  if (song.isPlaying()) {
    song.pause();
    button.html('play');
  } else {
    song.play();
    button.html('pause');
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(2, 5);
    this.speed = random(2, 5);
    this.color = color(random(360), 80, 100);
    this.angle = random(360);
    this.amplitude = random(5, 20);
    this.frequency = random(0.1, 0.5);
  }
  
  fall() {
    this.y += this.speed;
  }
  
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
  
  checkBoundary() {
    if (this.y > height + 50) {
      this.y = -50;
      this.x = random(width);
    }
  }
  
  wobble(amplitude, frequency) {
    this.x += sin(this.angle) * amplitude;
    this.angle += frequency;
  }
}
