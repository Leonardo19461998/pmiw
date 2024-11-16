let objJuego;
let personajeImg;
let fondo1, fondo2, fondo3, fondo4;
let sonidoFondo;

function preload() {
  personajeImg = loadImage("data/red1.png");
  fondo1 = loadImage("data/fondo1.jpg");
  fondo2 = loadImage("data/fondo2.jpg");
  fondo3 = loadImage("data/fondo3.jpg");
  fondo4 = loadImage("data/fondo4.jpg");
  userStartAudio();
  sonidoFondo = loadSound("data/audiojuego.mp3");
}


function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
  sonidoFondo.loop();
}


function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function keyReleased() {
  objJuego.keyReleased();
}
