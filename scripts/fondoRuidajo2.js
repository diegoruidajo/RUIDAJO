function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  //background(0);
  strokeWeight(20);
  frameRate(60);
}

function draw() {
  for (let i = 0; i < width; i++) {
    let r = random(1000);
    stroke(r);
    line(i, 0, i, height);
  }
}
