class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 50;
    this.alto = 50;
    this.velX = 0;
    this.velY = 0;
    this.enSuelo = true;
    this.vida = 1;
    this.imagen = personajeImg;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, this.ancho, this.alto); 
  }

  aplicarGravedad(gravedad) {
    if (!this.enSuelo) {
      this.velY += gravedad;
    }
  }

  mover() {
    this.posX += this.velX;
    this.posY += this.velY;


    if (this.posX < 0) {
      this.posX = 0;
    } else if (this.posX > width - this.ancho) {
      this.posX = width - this.ancho;
    }

    if (this.posY >= height - this.alto) {
      this.posY = height - this.alto;
      this.velY = 0;
      this.enSuelo = true;
    } else {
      this.enSuelo = false;
    }
  }

  saltar() {
    if (this.enSuelo) {
      this.velY = -15;
      this.enSuelo = false;
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.velX = -5;
    } else if (keyCode === RIGHT_ARROW) {
      this.velX = 5;
    }
  }

  keyReleased() {
    if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
      this.velX = 0;
    }
  }
}
