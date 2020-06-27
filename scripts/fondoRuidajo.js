
/*
function preload() {

}
*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  /*createCanvas(400, 400);*/
  /*colorMode(HSB)
  background(161.8, 64, 72.9, 10);*/
}

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let vel1 = 4;
let vel2 = 5;
let vel3 = -2;
let vel4 = 20;

let ancho;
let alto;

function draw() {
  /*canvas.resize(windowWidth, windowHeight);*/
  colorMode(HSB)
  stroke(206.2, 56.9, 71);
  strokeWeight(1);
  ellipse(x1, y2, x2, y1);
  noFill()
  stroke(206.2, 56.9, 71);
  strokeWeight(random(5));
  ellipse(x1, y1, random(40), random(30));
  ellipse(x2, y2, random(30), random(40));

  ancho = windowWidth;
  alto = windowHeight;

if (x1 > ancho || x1 < 0) {
    vel1 *= -1
}
x1 = x1 + vel1;

if (y1 > alto || y1 < 0) {
  vel2 *= -1
}
y1 = y1 + vel2;

if (x2 > windowWidth || x2 < 0) {
  vel3 *= -1
}
x2 = x2 + vel3;

if (y2 > windowHeight || y2 < 0) {
vel4 *= -1
}
y2 = y2 + vel4;

}
