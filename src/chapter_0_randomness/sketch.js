import p5 from "p5";
import Terrain from "../utils/terrain";

// const sketch = (p) => {
//   let walker;
//
//   p.setup = function () {
//     p.createCanvas(1280, 480);
//     walker = new Walker();
//   };
//
//   let t = 0;
//   p.draw = function () {
//     walker.step();
//     walker.show();
//   };
//
//   class Walker {
//     constructor() {
//       this.tx = 0;
//       this.ty = 10000;
//     }
//
//     show() {
//       p.strokeWeight(2);
//       p.fill(127);
//       p.stroke(0);
//       p.circle(this.x, this.y, 48);
//     }
//
//     step() {
//       this.x = p.map(p.noise(this.tx), 0, 1, 0, p.width);
//       this.y = p.map(p.noise(this.ty), 0, 1, 0, p.height);
//
//       this.tx += 0.01;
//       this.ty += 0.01;
//     }
//   }
// };
// new p5(sketch);

// const perlinNoise = (p) => {
//   p.setup = () => {};
//   p.draw = () => {
//     let t = 0;
//     p.draw = function () {
//       p.background(255);
//       let xoff = t;
//       p.noFill();
//       p.stroke(0);
//       p.strokeWeight(2);
//       p.beginShape();
//       for (let i = 0; i < p.width; i++) {
//         let y = p.noise(xoff) * p.height;
//         xoff += 0.01;
//         p.vertex(i, y);
//       }
//       p.endShape();
//       t += 0.01;
//     };
//   };
// };
// new p5(perlinNoise);

// const movingPixels = (p) => {
//   let zoff = 0.0;
//   p.setup = () => {
//     p.createCanvas(1280, 480);
//
//     // Tell p5 we will work with pixels
//     p.loadPixels();
//   };
//
//   p.draw = () => {
//     let xoff = 0.0;
//
//     // Updating pixels with perlin noise
//     for (let x = 0; x < p.width; x++) {
//       let yoff = 1000.0;
//
//       for (let y = 0; y < p.height; y++) {
//         let index = (x + y * p.width) * 4;
//
//         let bright = p.map(p.noise(xoff, yoff, zoff), 0, 1, 0, 255);
//
//         p.pixels[index] = bright;
//         p.pixels[index + 1] = bright;
//         p.pixels[index + 2] = bright;
//         p.pixels[index + 3] = 255;
//       }
//       xoff += 0.01; // Incrementing x-offset perlins noise
//     }
//
//     p.updatePixels();
//
//     zoff += 0.01;
//   };
// };
// new p5(movingPixels);

const movingTerrain = (p) => {
  let land;
  let theta = 0.0;

  p.setup = () => {
    p.createCanvas(1280, 480, p.WEBGL);

    // Create a landscape object
    land = new Terrain(p, 20, 800, 400);
  };

  p.draw = () => {
    // Ok, visualize the landscape space
    land.calculate();
    p.background(255);
    p.push();
    p.translate(0, 20, -200);
    p.rotateX(p.PI / 3);
    p.rotateZ(theta);
    land.render();
    p.pop();

    theta += 0.0025;
  };
};
new p5(movingTerrain);
