let canvas, matasesos, resilienteMula, onda, ondavel, hijatrack, hijaamplitud;
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
let vel1 = 2;
let vel2 = 2.1;
let vel3 = 2.3;
let vel4 = 2.4;


function preload() {
  resilienteMula = loadImage('/img/gato-resiliente-x1000.png');
  hijatrack = loadSound('/pruebaMulaWeb/audio/hija-resiliente.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  x2 = windowWidth;
  y1 = windowHeight;
  //background(0, 0, 0);

  hijatrack.loop();
  hijaamplitud = new p5.Amplitude();
  hijaamplitud.setInput(hijatrack);

}

function draw() {
  if(x1 > windowWidth || x1 < 0){
    vel1 *= -1;
  }
  x1 = x1 + vel1*((sin(radians(frameCount))+1)/2);
  if(x2 > windowWidth || x2 < 0){
    vel2 *= -1;
  }
  x2 = x2 + vel2;
  if(y1 > windowHeight || y1 < 0){
    vel3 *= -1;
  }
  y1 = y1 + vel3;
  if(y2 > windowHeight || y2 < 0){
    vel4 *= -1;
  }
  y2 = y2 + vel4*((cos(radians(frameCount))+1)/2);


  let rms = hijaamplitud.getLevel();
  image(resilienteMula, mouseX-(windowWidth/8), mouseY-(windowWidth/8), 10+rms*1000, 10+rms*1000);
  
  strokeWeight((map(cos(frameCount), -1, 1, 0.1, 3)));
  stroke(random(150, 255), random(50, 100), random(90, 120));
  line(x1, y1, x2, y2);

  strokeWeight((map(sin(frameCount), -1, 1, 0.1, 4)));
  stroke(random(150, 255), random(50, 100), random(90, 120));
  line(x2, y1, x1, y2);

  strokeWeight((map(cos(frameCount), -1, 1, 0.1, 5)));
  stroke(random(150, 255), random(50, 100), random(90, 120));
  line(x1*((cos(radians(frameCount))+1)/2), y1, x2, y2*((sin(radians(frameCount))+1)/2));

  strokeWeight((map(cos(frameCount), -1, 1, 0.1, 6)));
  stroke(random(150, 255), random(50, 100), random(90, 120));
  line(x1, y1*((sin(radians(frameCount))+1)/2), x2*((cos(radians(frameCount))+1)/2), y2);

  onda = sin(radians(frameCount));
  ondavel = random(-150, 150);
  line(width/2+onda*(width/2)+ondavel, 0, ((width/2+onda*(width/2))*-1)+width, height);
  line(0, height/2+onda*(height/2), width, (((height/2+onda*(height/2))*-1)+height)+ondavel);

  background(255, 255, 255, 0.5);
}
/*
function mousePressed() {
  if (hijatrack.isPlaying()) {
    hijatrack.stop();
  } else {
    hijatrack.play();
  }
}
*/
function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
