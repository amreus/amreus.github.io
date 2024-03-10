let xpos, ypos, xradius, yradius;
let noise_x;
let noise_offset = 1000;

function setup() {
    createCanvas(400, 400);
    noise_x = random(10000);
    noiseDetail(2);
    xpos = new Slider("x position", 0, width, width / 2, 10);
    ypos = new Slider("y position", 0, height, height / 2, 10);
    xradius = new Slider("x radius", 0, 200, 25, 1);
    yradius = new Slider("y radius", 0, 200, 25, 1);
}

function draw() {
    background(220);
    fill(255);
    let x = xpos.value();
    let y = ypos.value();
    let xr = xradius.value() * 2;
    let yr = yradius.value() * 2;
    ellipse(x, y, xr, yr);
    fill(0);
    let r = ceil(70*noise(noise_offset));
    circle(x-xr/4, y-yr/6, r);//, y-yr/2, yr/4)
    circle(x+xr/4, y-yr/6, r);//, y-yr/2, yr/4)
    noFill();
    arc(x, y+yr/8, xr/2, yr/2, 0, PI)
    xradius.value(floor(200 * noise(noise_x + noise_offset)));
    yradius.value(floor(200 * noise(noise_x + 500 + noise_offset)));
    noise_offset += 0.025;
}
