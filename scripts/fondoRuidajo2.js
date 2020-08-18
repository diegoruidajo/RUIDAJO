function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(60);
}

function draw() {
    let r = random(100);
    let r2 = random(20);
    let x1 = random(width)
    strokeWeight(r2);
    stroke(r);
    line(x1, 0, (x1*-1)+width, height);
}
