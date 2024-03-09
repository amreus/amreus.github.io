let size = 500;
let earth, moon;
let dy, mn, yr;
let bgStars;

function setup() {
  createCanvas(size, size).parent('sketch');
  frameRate(40);
  earth = new Earth();
  moon = new Moon();
  bgStars = createGraphics(size, size);
  for (let i = 0; i < 300; i++) {
    let x = random(0, bgStars.width);
    let y = random(0, bgStars.height);
    bgStars.fill(random(32, 255));
    bgStars.noStroke();
    bgStars.circle(x, y, random(1, 4));
  }
  // saveGif("anim.gif", 24.4);
}

function draw() {
  background(0);
  image(bgStars, 0, 0);
  sun();
  earth.update();
  moon.update();
  moon.show();
  earth.show();
  // let d = map(frameCount % 365, 0, 364, 0, size);
  // stroke(200);
  // rect(0, 0, d, size * 0.02);
}

function sun() {
  fill("yellow");
  circle(width / 2, height / 2, size * 0.25);
}

class Earth {
  constructor() {
    this.x = size * 0.25 * sin(this.r) + size / 2;
    this.y = size * 0.25 * cos(this.r) + size / 2;
    this.size = size * 0.1;
  }
  update() {
    let n = 365.25;
    let p = frameCount % n;

    let d = size * 0.35;
    this.r = map(p, 0, n, 0, TWO_PI);
    this.x = d * sin(this.r) + size / 2;
    this.y = d * cos(this.r) + size / 2;
  }
  show() {
    fill("rgb(73,143,188)");
    circle(this.x, this.y, this.size);
  }
}

class Moon {
  constructor() {
    this.x = 50 * sin(this.r) + size / 2;
    this.y = 50 * cos(this.r) + size / 2;
  }
  update() {
    let n = 27.32;
    this.r = map(frameCount % n, 0, n, 0, TWO_PI);
    this.x = earth.x + earth.size * sin(this.r);
    this.y = earth.y + earth.size * cos(this.r);
  }
  show() {
    fill("white");
    circle(this.x, this.y, earth.size / 3);
  }
}
