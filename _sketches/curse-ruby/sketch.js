let vel_s = 6 / 60;
let vel_m = vel_s / 60;
let vel_h = vel_m; // / 12;

let h, m, s;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  h = 0;
  m = 0;
  s = 0;
}

function draw() {
  background(20);
  text(`${hour() % 12}:${minute()}:${second()}`, 180, 160);
  translate(width / 2, height / 2);
  rotate(-90);

  for (a = 0; a < 360; a += 30) {
    let r = 24;
    line(0, 0, r * cos(a), r * sin(a));
  }
  circle(0, 0, 30);

  x = 30 * cos(s);
  y = 30 * sin(s);
  circle(x, y, 6);
  s = (s + vel_s) % 360;
  if (s < second() * 6) {
    s += 0.1;
  }

  m = minute() * 6 + (s / 360) * 6;
  x = 60 * cos(m);
  y = 60 * sin(m);
  circle(x, y, 10);
  if (m < minute() * 6) {
    // m += 0.1;
  }

  h = (hour() % 12) * 30 + (m / 360) * 30;
  x = 40 * cos(h);
  y = 40 * sin(h);
  circle(x, y, 14);
  // text("h", x, y);
  //h = (h + vel_h) % 360;
  // h = m / 360 * 30
  if (h < ((hour() % 12) * 360) / 12) {
    // h += 0.1;
  }
}
