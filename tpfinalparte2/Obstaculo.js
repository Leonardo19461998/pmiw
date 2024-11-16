class Obstaculo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 50;
    this.alto = 100;
  }

  dibujar() {
    fill(255);
    rect(this.posX, this.posY, this.ancho, this.alto);
  }
}
