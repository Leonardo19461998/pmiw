class PantallaCreditos {
  dibujar() {
    background(0);
    fill(255);
    textSize(24);
    text("Créditos", 50, height / 2 - 100);
    textSize(16);
    text("Desarrollado por Geronimo Perez, Leonardo Caballero", 50, height / 2);
    text("Presiona 'R' para volver a la introducción", 50, height / 2 + 50);
  }
}
