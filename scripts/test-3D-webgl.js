function setup() {
  createCanvas(700, 700, WEBGL);
	frameRate(30);
}

function draw() {
	background(150, 150, 150);
	rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.02);
	rotateZ(frameCount * 0.03);
	translate(0, 0, 0);
	fill(255, 0, 0);
  box(50);
	
	rotateY(frameCount * 0.04);
  rotateX(frameCount * 0.05);
	rotateZ(frameCount * 0.06);
	translate(50+25+12.5+6.25, 50+25+12.5+6.25, 50+25+12.5+6.25);
	fill(255, 30, 0);
  box(25);
	
	rotateY(frameCount * 0.07);
  rotateX(frameCount * 0.08);
	rotateZ(frameCount * 0.09);
	translate(25+12.5+6.25, 25+12.5+6.25, 25+12.5+6.25);
	fill(255, 60, 0);
  box(12.5);
	
	rotateY(frameCount * 0.1);
  rotateX(frameCount * 0.11);
	rotateZ(frameCount * 0.12);
	translate(12.5, 12.5, 12.5);
	fill(255, 90, 0);
  box(6.25);
};
