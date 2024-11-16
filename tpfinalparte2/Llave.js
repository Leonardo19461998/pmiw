class Llave {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.ancho = 30;
    this.alto = 30;
    this.imagenLlave = loadImage('data/llave.png');
  }

  dibujar() {
    image(this.imagenLlave, this.posX, this.posY, this.ancho, this.alto); 
  }
}
