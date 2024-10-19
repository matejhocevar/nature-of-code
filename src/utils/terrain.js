import p5 from "p5";

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// "Landscape" example

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

export default class Terrain {
  constructor(p, scl, w, h) {
    this.p = p; // size of each cell
    this.scl = scl; // size of each cell
    // width and height of thingie
    this.w = w;
    this.h = h;
    // number of rows and columns
    this.cols = p.floor(w / scl);
    this.rows = p.floor(h / scl);
    // using an array to store all the height values
    this.z = make2DArray(this.cols, this.rows);
    // perlin noise argument
    this.zoff = 0;
  }

  // Calculate height values (based off a neural network)
  calculate() {
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        this.z[i][j] = this.p.map(
          this.p.noise(xoff, yoff, this.zoff),
          0,
          1,
          -120,
          120,
        );
        yoff += 0.1;
      }
      xoff += 0.1;
    }
    this.zoff += 0.0025;
  }

  // Render landscape as grid of quads
  render() {
    // Every cell is an individual quad
    for (let x = 0; x < this.z.length - 1; x++) {
      this.p.beginShape(this.p.QUAD_STRIP);
      for (let y = 0; y < this.z[x].length; y++) {
        // one quad at a time
        // each quad's color is determined by the height value at each vertex
        // (clean this part up)
        this.p.stroke(0);
        let currentElevation = this.z[x][y];
        let currentShade = this.p.map(currentElevation, -120, 120, 0, 255);
        this.p.fill(currentShade, 255);
        let xCoordinate = x * this.scl - this.w / 2;
        let yCoordinate = y * this.scl - this.h / 2;
        this.p.vertex(xCoordinate, yCoordinate, this.z[x][y]);
        this.p.vertex(xCoordinate + this.scl, yCoordinate, this.z[x + 1][y]);
      }
      this.p.endShape();
    }
  }
}
