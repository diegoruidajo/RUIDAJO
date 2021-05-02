let canvas, resilienteMula, onda, ondavel, resilientepreview, resilienteamplitud;
let btnPlay, btnSalto;
let conteoBtn, tiempo;
let rms;
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
let vel1 = 2;
let vel2 = 2.1;
let vel3 = 2.3;
let vel4 = 2.4;


function preload() {
  resilienteMula = loadImage('./img/gato-resiliente-x1000.png');
  resilientepreview = loadSound('./audio/resiliente-mula-preview.mp3');
}

function setup() {
  //noCursor();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  x2 = windowWidth;
  y1 = windowHeight;
  //background(0, 0, 0);

  //btnPlay = createButton('play album preview');
  //btnPlay.position(20, 20);
  //btnPlay.mousePressed(toggleplay);

  btnSalto = createButton('>>|');
  btnSalto.addClass('btnSalto');
  btnSalto.mousePressed(saltos);
  conteoBtn=0;

  resilientepreview.loop();
  resilienteamplitud = new p5.Amplitude();
  resilienteamplitud.setInput(resilientepreview);
}

function saltos() {
  switch (conteoBtn) {
    case 0:
      btnSalto.html('1. Hija >>|');
      resilientepreview.jump(0);
      conteoBtn+=1
      break;
    case 1:
      btnSalto.html('2. Siete >>|');
      resilientepreview.jump(10);
      conteoBtn += 1;
      break;
    case 2:
      btnSalto.html('3. Vagido >>|');
      resilientepreview.jump(20);
      conteoBtn+=1;
      break;
    case 3:
      btnSalto.html('4. Mondo Barbián >>|');
      resilientepreview.jump(30);
      conteoBtn+=1;
      break;
    case 4:
      btnSalto.html('5. Sonámbulo >>|');
      resilientepreview.jump(40);
      conteoBtn+=1;
      break;
    case 5:
      btnSalto.html('6. Petricor >>|');
      resilientepreview.jump(50);
      conteoBtn+=1;
      break;
    case 6:
      btnSalto.html('7. Ataraxia >>|');
      resilientepreview.jump(60);
      conteoBtn+=1;
      break;
    default:
      conteoBtn = 0;
      saltos();
      break;
  }
}

/*function toggleplay() {
  if(!resilientepreview.isPlaying()){
    resilientepreview.loop();
    btnPlay.html("pause")
  } else {
    resilientepreview.pause();
    btnPlay.html("play album preview");
  }
}*/

function draw() {
  imageMode(CENTER);
  rms = resilienteamplitud.getLevel();
  image(resilienteMula, mouseX-resilienteMula.width/64, mouseY-resilienteMula.height/64, 10+rms*1000, 10+rms*1000);
  console.log(rms);

  tiempo = resilientepreview.currentTime();

  if(tiempo<10){
    btnSalto.html('1. Hija >>|');
  } else if (tiempo<20 && tiempo>10){
    btnSalto.html('2. Siete >>|');
  } else if (tiempo<30 && tiempo>20){
    btnSalto.html('3. Vagido >>|');
  } else if (tiempo<40 && tiempo>30){
    btnSalto.html('4. Mondo Barbián >>|');
  } else if (tiempo<50 && tiempo>40){
    btnSalto.html('5. Sonámbulo >>|');
  } else if (tiempo<60 && tiempo>50){
    btnSalto.html('6. Petricor >>|');
  } else if (tiempo<70 && tiempo>60) {
    btnSalto.html('7. Ataraxia >>|');
  }

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
  if (resilientepreview.isPlaying()) {
    resilientepreview.stop();
  } else {
    resilientepreview.play();
  }
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}