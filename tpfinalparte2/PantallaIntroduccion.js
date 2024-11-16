class PantallaIntroduccion {
  constructor() {
    this.texto = "Bienvenido al juego. \n Presiona ENTER para empezar.";
  }

  dibujar() {
    background(0);
    textSize(32);
    fill(255);
    
    text(this.texto, 100,200);
  }
}
