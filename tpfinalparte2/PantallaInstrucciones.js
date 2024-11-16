class PantallaInstrucciones {
  constructor() {
    this.texto = "Instrucciones: \nUsa las teclas direccionales para moverse \n y toca arriba para saltar.";
  }

  dibujar() {
    background(100);
    textSize(24);
    fill(255);
    text(this.texto, 50, 150);
  }
}
