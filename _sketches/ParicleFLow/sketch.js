let particles = [];
let num = 5000;
let noiseScale = 0.01;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  noiseSlider = new Slider("noise", 0, 1000, 100, 10);
  hueSlider = new Slider("hue", 0, 330, 180, 30);
  createButton("Randomize").mousePressed(() => {
    reseed();
  });
  reseed();
}

function draw() {
  background("hsba(10, 0%, 10%, 0.1)");
  stroke(hueSlider.value(), 100, 100);

  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    noiseScale = 1 / noiseSlider.value();
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = n * TAU + PI / 2;
    p.x += cos(a);
    p.y += sin(a);

    if (!onScreen(p)) {
      p.x = random(width);
      p.y = (height);
    }
  }
}

function onScreen(v) {
  if (v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height) {
    return true;
  } else {
    return false;
  }
}

function reseed() {
  noiseSeed(millis());
  hueSlider.value(random(330));
  noiseSlider.value(random(1000));
  for (let p of particles) {
    p.x = random(width);
    p.y = random(height);
  }
}
