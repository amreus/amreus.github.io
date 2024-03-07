let rows;
let cols;
let size = 10;
let grid = [];


function setup() {
  createCanvas(700, 700);
  //frameRate(60);
  cols = width / size;
  rows = height / size;
  grid = new Grid();
}

function draw() {
  background(220);
  grid.update();
  grid.display();
}
