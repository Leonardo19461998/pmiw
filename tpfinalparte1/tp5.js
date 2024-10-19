/*TP#Final — Aventura Gráfica Interactiva Web
Alumnos: Leonardo Caballero, Geronimo Perez
Legajo: 91520/2 (Leonardo Caballero)
Comision N°5
*/

let imagenes = [];
let pantallaActual = 0;
let fuente;
let sonidoFondo;

function preload() {
  
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  fuente = loadFont("data/angrybirds-regular.ttf");
  userStartAudio();
  sonidoFondo = loadSound("data/sonidojuego.mp3");
}

function setup() {
  
  createCanvas(640, 480);
  textFont(fuente);
  sonidoFondo.loop();
}

function draw() {
  
  background(200);
  image(imagenes[pantallaActual], 0, 0, width, height);
  mostrarPantalla();
  dibujarBotones();
}

function mostrarPantalla() {
  if (pantallaActual === 0) {
    pantalla0();
  } else if (pantallaActual === 1) {
    pantalla1();
  } else if (pantallaActual === 2) {
    pantalla2();
  } else if (pantallaActual === 3) {
    pantalla3();
  } else if (pantallaActual === 4) {
    pantalla4();
  } else if (pantallaActual === 5) {
    pantalla5();
  } else if (pantallaActual === 6) {
    pantalla6();
  } else if (pantallaActual === 7) {
    pantalla7();
  } else if (pantallaActual === 8) {
    pantalla8();
  } else if (pantallaActual === 9) {
    pantalla9();
  } else if (pantallaActual === 10) {
    pantalla10();
  } else if (pantallaActual === 11) {
    pantalla11();
  } else if (pantallaActual === 12) {
    pantalla12();
  } else if (pantallaActual === 13) {
    pantalla13();
  } else if (pantallaActual === 14) {
    pantalla14();
  } else if (pantallaActual === 15) {
    pantalla15();
  } else if (pantallaActual === 16) {
    pantalla16();
  } else if (pantallaActual === 17) {
    pantalla17();
  }
}
