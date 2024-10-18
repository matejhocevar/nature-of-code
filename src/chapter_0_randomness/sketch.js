import p5 from "p5";
import { createVector, addVectors } from "./vectors";

const sketch = (p) => {
  let position, velocity;

  p.setup = function () {
    p.createCanvas(400, 400);
    position = createVector(p.width / 2, p.height / 2);
    velocity = createVector(2, 3);
  };

  p.draw = function () {
    p.background(220);
    position = addVectors(position, velocity);
    p.ellipse(position.x, position.y, 50, 50);
  };
};

new p5(sketch);