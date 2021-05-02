let canvas;
let btnPlay, btnSalto;
let conteoBtn, tiempo;
let vAncho, vAlto;

function preload() {
  vAncho = windowWidth;
  vAlto = windowHeight;

  matasesospreview = loadSound('./audio/matasesos-mula-preview.mp3');
}

function setup() {
  cursor('grab');
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  btnPlay = createButton('');
  btnPlay.position(20, 20);
  btnPlay.id('play');
  //btnPlay.addClass('flex');
  btnPlay.addClass('btnPlay');
  btnPlay.mousePressed(toggleplay);

  btnSalto = createButton('');
  btnSalto.position(24, 70);
  //btnSalto.addClass('flex');
  btnSalto.addClass('btnSalto');
  btnSalto.mousePressed(saltos);
  conteoBtn=0;

}

function saltos() {
  switch (conteoBtn) {
    case 0:
      btnSalto.html('Aurora');
      matasesospreview.jump(0);
      conteoBtn+=1
      break;
    case 1:
      btnSalto.html('Disculpe Ud. Señora');
      matasesospreview.jump(10);
      conteoBtn += 1;
      break;
    case 2:
      btnSalto.html('El Rey');
      matasesospreview.jump(20);
      conteoBtn+=1;
      break;
    case 3:
      btnSalto.html('Homenaje póstumo a Nelly Moreno en 6/8');
      matasesospreview.jump(30);
      conteoBtn+=1;
      break;
    case 4:
      btnSalto.html('Martillo y Puñal V.2');
      matasesospreview.jump(40);
      conteoBtn+=1;
      break;
    case 5:
      btnSalto.html('Salvador');
      matasesospreview.jump(50);
      conteoBtn+=1;
      break;
    default:
      conteoBtn = 0;
      saltos();
      break;
  }
}

function toggleplay() {
  if(!matasesospreview.isPlaying()){
    matasesospreview.loop();
    btnPlay.id('pause');
  } else {
    matasesospreview.pause();
    btnPlay.id("play");
  }
}

function draw() {
  imageMode(CENTER);
  background(0, 0, 0);

  tiempo = matasesospreview.currentTime();

  if(tiempo<10){
    btnSalto.html('Aurora');
  } else if (tiempo<20 && tiempo>10){
    btnSalto.html('Disculpe Ud. Señora');
  } else if (tiempo<30 && tiempo>20){
    btnSalto.html('El Rey');
  } else if (tiempo<40 && tiempo>30){
    btnSalto.html('Homenaje póstumo a Nelly Moreno en 6/8');
  } else if (tiempo<50 && tiempo>40){
    btnSalto.html('Martillo y Puñal V.2');
  } else if (tiempo<60 && tiempo>50){
    btnSalto.html('Salvador');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
