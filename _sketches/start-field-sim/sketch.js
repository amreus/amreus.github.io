


class Star {
  constructor(radius) {
    if (radius) {
      this.r = radius;
    } else {
      this.r = random(5, 20);
    }
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);
  }

  update() {
    this.z -= 5;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
    }
  }

  show() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, width);
    let r = map(this.z, 0, width, 20, 0);
    circle(sx, sy, r);
  }
}

let nStars = 500;
let cvs;

function setup() {
  cvs = createCanvas(600, 600);
  cvs.parent('sketch')
  stars = [];
  for (let i = 0; i < nStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let star of stars) {
    star.update();
    star.show();
  }
}
