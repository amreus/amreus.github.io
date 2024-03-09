let angle = 0;
let radius;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch')
    radius = createSlider(10, 100, 10);
    radius.parent('sketch')
    radius.position(10, 10)
}

function draw() {
    background(220);
    translate(width/2, height/2)
    x = 100 * cos(angle);
    y = 100 * sin(angle);
    circle(x, y, radius.value())
    angle += 0.01;
}