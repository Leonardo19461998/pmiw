//TP#1 — OpArt con Funciones y Ciclo For en p5-js
//Alumno:Leonardo Caballero
//Legajo: 91520/2
//Profesor: Tobias Albirosa
//Comision: 5

let cant;
let c;
let img;

function preload() {
  img = loadImage('Arte.jpeg');
}

function setup() {
  createCanvas(800, 400);
  rectMode(RADIUS);
  ellipseMode(RADIUS);
  c = color(random(255), random(255), random(255));
  fill(c);
  noStroke();
  cant = floor(random(15, 40));
}

function draw() {
  background(255);
  blendMode(DIFFERENCE);

  image(img, 0, 0, width / 2, height);

  for (let i = 0; i <= cant; i++) {
    let radioa = calculateRadius(i);
    let radiob = map(i, 0, cant, width / 4, 20);
    let radio = map(mouseY, 0, height, radioa, radiob);
    
    drawShape(width * 3 / 4, height / 2, radio);
  }
  
  blendMode(BLEND);
}

function mousePressed() {
  c = color(random(255), random(255), random(255));
  fill(c);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    setup();
  }
}

function drawShape(x, y, size) {
  if (x > width / 2) {
    rect(x, y, width / 4, size);
    ellipse(x, y, size, size);
  }
}

function calculateRadius(i) {
  return map(Math.log(i + 1), 0, Math.log(cant + 1), width / 4, 1); // Se agrega 1 a 'i' y 'cant' para evitar log(0)
}
