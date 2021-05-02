let canvas;
let btnPlay, btnSalto;
let conteoBtn, tiempo;
let vAncho, vAlto;
let mMula, uMula, lMula, aMula, calavera, martillo, rojo, matasesostext;


function preload() {
  vAncho = windowWidth;
  vAlto = windowHeight;
  if(vAncho>150 && vAncho<500) {
    mMula = new imagen(vAncho/1.2, vAlto/6, './img/matasesosjs-img/matasesos-m-240x197.png');
    uMula = new imagen(vAncho/1.2, vAlto/2.82, './img/matasesosjs-img/matasesos-u-184x204.png');
    lMula = new imagen(vAncho/1.2, vAlto/1.8, './img/matasesosjs-img/matasesos-l-142x209.png');
    aMula = new imagen(vAncho/1.2, vAlto/1.3, './img/matasesosjs-img/matasesos-a-248x222.png');
    calavera = new imagen(vAncho/5, vAlto/1.5, './img/matasesosjs-img/matasesos-caratula-gifx478.gif');
    martillo = new imagen(vAncho/5.5, vAlto/2.7, './img/matasesosjs-img/matasesos-martillo-gifx678.gif');
    rojo = new imagen(vAncho/2, vAlto/2, './img/matasesosjs-img/matasesos-rojo-gifx1000.gif');
    matasesostext = new imagen(vAncho/3.8, vAlto/8, './img/matasesosjs-img/matasesos-matasesos-340x42.png');
  } else if(vAncho>500 && vAncho<1000){
    mMula = new imagen(vAncho/1.3, vAlto/4, '../img/matasesosjs-img/matasesos-m-240x197.png');
    uMula = new imagen(vAncho/1.3, vAlto/2.5, '../img/matasesosjs-img/matasesos-u-184x204.png');
    lMula = new imagen(vAncho/1.3, vAlto/1.8, '../img/matasesosjs-img/matasesos-l-142x209.png');
    aMula = new imagen(vAncho/1.3, vAlto/1.4, '../img/matasesosjs-img/matasesos-a-248x222.png');
    calavera = new imagen(vAncho/2.8, vAlto/1.7, '../img/matasesosjs-img/matasesos-caratula-gifx478.gif');
    martillo = new imagen(vAncho/2.9, vAlto/3.2, '../img/matasesosjs-img/matasesos-martillo-gifx678.gif');
    rojo = new imagen(vAncho/2, vAlto/2, '../img/matasesosjs-img/matasesos-rojo-gifx1000.gif');
    matasesostext = new imagen(vAncho/5, vAlto/8, '../img/matasesosjs-img/matasesos-matasesos-340x42.png');
  } else if(vAncho>1000 && vAncho<1300){
    mMula = new imagen(vAncho/1.5, vAlto/5, '../img/matasesosjs-img/matasesos-m-240x197.png');
    uMula = new imagen(vAncho/1.5, vAlto/2.5, '../img/matasesosjs-img/matasesos-u-184x204.png');
    lMula = new imagen(vAncho/1.5, vAlto/1.65, '../img/matasesosjs-img/matasesos-l-142x209.png');
    aMula = new imagen(vAncho/1.5, vAlto/1.22, '../img/matasesosjs-img/matasesos-a-248x222.png');
    calavera = new imagen(vAncho/2.9, vAlto/1.45, '../img/matasesosjs-img/matasesos-caratula-gifx478.gif');
    martillo = new imagen(vAncho/2.9, vAlto/2.5, '../img/matasesosjs-img/matasesos-martillo-gifx678.gif');
    rojo = new imagen(vAncho/2.1, vAlto/2.3, '../img/matasesosjs-img/matasesos-rojo-gifx1000.gif');
    matasesostext = new imagen(vAncho/5, vAlto/10, '../img/matasesosjs-img/matasesos-matasesos-340x42.png');
  } else if(vAncho>1300){
    mMula = new imagen(vAncho/1.5, vAlto/5, '../img/matasesosjs-img/matasesos-m-240x197.png');
    uMula = new imagen(vAncho/1.5, vAlto/2.5, '../img/matasesosjs-img/matasesos-u-184x204.png');
    lMula = new imagen(vAncho/1.5, vAlto/1.65, '../img/matasesosjs-img/matasesos-l-142x209.png');
    aMula = new imagen(vAncho/1.5, vAlto/1.22, '../img/matasesosjs-img/matasesos-a-248x222.png');
    calavera = new imagen(vAncho/2.5, vAlto/1.45, '../img/matasesosjs-img/matasesos-caratula-gifx478.gif');
    martillo = new imagen(vAncho/2.4, vAlto/2.2, '../img/matasesosjs-img/matasesos-martillo-gifx678.gif');
    rojo = new imagen(vAncho/2, vAlto/2, '../img/matasesosjs-img/matasesos-rojo-gifx1000.gif');
    matasesostext = new imagen(vAncho/3, vAlto/6.5, '../img/matasesosjs-img/matasesos-matasesos-340x42.png');
  } 

  matasesospreview = loadSound('./audio/matasesos-mula-preview.mp3');
}

function setup() {
  cursor('grab');
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  rojo.load();
  mMula.load();
  uMula.load();
  lMula.load();
  aMula.load();
  calavera.load();
  martillo.load();
  matasesostext.load();

  btnPlay = createButton('');
  //btnPlay.position(20, 20);
  btnPlay.id('play');
  //btnPlay.addClass('flex');
  btnPlay.addClass('btnPlay');
  btnPlay.mousePressed(toggleplay);

  btnSalto = createButton('');
  //btnSalto.position(200, 20);
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
  background(221, 214, 183);
  rojo.show();
  mMula.show();
  uMula.show();
  lMula.show();
  aMula.show();
  calavera.show();
  martillo.show();
  matasesostext.show();

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

function mousePressed() {
  rojo.click();
  mMula.click();
  uMula.click();
  lMula.click();
  aMula.click();
  calavera.click();
  martillo.click();
  matasesostext.click();
}

function mouseReleased() {
  rojo.released();
  mMula.released();
  uMula.released();
  lMula.released();
  aMula.released();
  calavera.released();
  martillo.released();
  matasesostext.released();
}

function mouseDragged() {
  rojo.drag();
  mMula.drag();
  uMula.drag();
  lMula.drag();
  aMula.drag();
  calavera.drag();
  martillo.drag();
  matasesostext.drag();
}

class imagen {
  constructor(x, y, directorio) {
    this.x = x;
    this.y = y;
    this.directorio = directorio;
    this.grabbed;
    this.laimagen;
 }

load() {
  this.laimagen = loadImage(this.directorio);
 }

show() {
  image(this.laimagen, this.x, this.y, this.laimagen.width/2, this.laimagen.height/2);
 }

click() {
  if(
    mouseX > this.x-this.laimagen.width/4 && //windowWidth/8 &&//this.laimagen.width &&
    mouseX < this.x + this.laimagen.width/4 &&//windowWidth/8 &&//this.laimagen.width &&
    mouseY > this.y-this.laimagen.height/4 &&//windowWidth/8 &&//this.laimagen.height &&
    mouseY < this.y + this.laimagen.height/4 //+ this.laimagen.height//windowWidth/8 //this.laimagen.height
   ){
    this.grabbed = true;
    cursor('grabbing');
   } else {
    this.grabbed = false;
   }
 }

drag() {
  if(this.grabbed){
    this.x = mouseX - this.laimagen.width/64//mouseX - windowWidth/32;//this.laimagen.width/2;
    this.y = mouseY - this.laimagen.height/64//mouseY - windowWidth/32;//this.laimagen.height/2;
   }
 }

released() {
  this.grabbed = false;
  cursor('grab');
 }
}
