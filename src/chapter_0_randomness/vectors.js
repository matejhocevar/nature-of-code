export function createVector(x, y) {
  return { x, y };
}

export function addVectors(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y,
  };
}