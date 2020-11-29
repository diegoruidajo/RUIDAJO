let rosquita1;
let rosquita2;
let rosquita3;
let rosquita4;
let rosquita5;
let rosquita6;
let rosquita7;
let rosquita8;

let offset = 0;
let offset2 = 0;
let easing = 0.05;

let canvas;

function preload() {
  resilienteMula = loadImage('https://github.com/diegoruidajo/RUIDAJO/blob/master/pruebaMulaWeb/img/resiliente-caratulax1000.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  rosquita1 = new Rosca();
  rosquita3 = new Rosca();
  rosquita4 = new Rosca();
  rosquita5 = new Rosca();
  rosquita6 = new Rosca();
  rosquita2 = new Rosca();
  rosquita7 = new Rosca();
  rosquita8 = new Rosca();
  background(0);
}

function draw() {
  //background(0, 0, 0);

  rosquita1.move();
  rosquita1.show();
  rosquita2.move();
  rosquita2.show2();
  rosquita3.move();
  rosquita3.show();
  rosquita4.move();
  rosquita4.show2();
  rosquita5.move();
  rosquita5.show();
  rosquita6.move();
  rosquita6.show2();
  rosquita7.move();
  rosquita7.show();
  rosquita8.move();
  rosquita8.show2();

  //shearX(sin(radians(frameCount)));
  //shearY(cos(radians(frameCount/9)));
  //let m = map(sin(frameCount), -1, 1, 0, windowWidth)
  //let m2 = map(sin(frameCount)*random(-3, 3), -1, 1, 0, windowHeight)
  //image(resilienteMula, windowWidth/8, windowHeight/8, windowWidth/8, windowWidth/8);
  //print(sin(frameCount));
  let dx = mouseX - resilienteMula.width / 2 - offset;
  offset += dx * easing;
  let dy = mouseY - resilienteMula.height / 2 - offset2;
  offset2 += dy * easing;
  tint(255, 127); // Display at half opacity
  image(resilienteMula, offset, offset2, windowWidth/4, windowWidth/4);
  print(dx, dy);
}

class Rosca { 
  constructor() {
    this.x = width/2;
    this.y = height/2;
    
    this.ancho = 1;
    this.alto = 1;
  }
  
  move() {
    this.x = this.x + random(-60, 60);
    this.y = this.y + random(-60, 60);
    
    if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
      this.x = width/2;
      this.y = height/2;
      this.ancho = this.ancho + random(-30, 30);
      this.alto = this.alto + random(-30, 30);
    }
  }
  
  show() {
    colorMode(RGB);
    stroke(random(200, 255), random(60, 80), random(100, 120));
    strokeWeight(random(0.1, 10));
    noFill();
    //ellipse(this.x, this.y, this.ancho, this.alto);
    line(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));

    stroke(0, 0, 0);
    line(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  }
  show2() {
    colorMode(RGB);
    stroke(random(180, 255), random(20, 40), random(150, 255));
    strokeWeight(random(0.1, 10));
    noFill();
    ellipse(this.x, this.y, this.ancho, this.alto);

    stroke(0, 0, 0);
    strokeWeight(random(0.1, 10));
    noFill();
    ellipse(random(0, windowWidth), random(0, windowHeight), this.ancho, this.alto);
    
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
