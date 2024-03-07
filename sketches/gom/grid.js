class Grid {
  constructor() {
    this.grid = [];
    for (let i = 0; i < cols; i++) {
      this.grid[i] = new Array;
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = floor(random(2));
      }
    }
  } // constructor()

  display() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (this.grid[i][j] == 0) {
          fill(255);
        } else {
          fill(0);
        }
        //strokeWeight(1);
        //stroke("green");
        noStroke();
        square(i * size, j * size - 1, size - 1); //, size);
      }
    }
  }

  neighboringStates(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let xi = (x + i + rows) % rows;
        let yi = (y + j + cols) % cols;
        sum += this.grid[xi][yi];
      }
    }
    sum -= this.grid[x][y];
    return sum;
  }

  update() {
    let nextGen = [];
    for (let i = 0; i < cols; i++) {
      nextGen[i] = [];
      for (let j = 0; j < rows; j++) {
        let n = this.neighboringStates(i, j);
        if (this.grid[i][j] == 1 && n < 2) {
          nextGen[i][j] = 0;
        } else if ((this.grid[i][j] == 1 && n == 2) || n == 3) {
          nextGen[i][j] = 1;
        } else if (this.grid[i][j] == 1 && n > 3) {
          nextGen[i][j] = 0;
        } else if (this.grid[i][j] == 0 && n == 3) {
          nextGen[i][j] = 1;
        } else {
          nextGen[i][j] = this.grid[i][j];
        }
      }
    }
    this.grid = nextGen;
  }
}
