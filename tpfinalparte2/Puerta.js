class Puerta {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.ancho = 50;
    this.alto = 100;
  }

  dibujar() {
    fill(139, 69, 19);
    rect(this.posX, this.posY, this.ancho, this.alto);
  }
}
