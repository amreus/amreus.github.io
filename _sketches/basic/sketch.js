let angle = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch')
}

function draw() {
    background(220);
    translate(width/2, height/2)
    x = 100 * cos(angle);
    y = 100 * sin(angle);
    circle(x, y, 100)
    angle += 0.01;
}