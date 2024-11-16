class Pantalla {
  constructor(personaje, obstaculos, llave = null, puertaDerecha = null, puertaIzquierda = null) {
    this.personaje = personaje;
    this.obstaculos = obstaculos;
    this.llave = llave;
    this.puertaDerecha = puertaDerecha;
    this.puertaIzquierda = puertaIzquierda;
  }

  dibujar(gravedad) {
     if (this === objJuego.pantallas[0]) {
      background(fondo1);  
    } else if (this === objJuego.pantallas[1]) {
      background(fondo2);  
    } else if (this === objJuego.pantallas[2]) {
      background(fondo3);  
    } else if (this === objJuego.pantallas[3]) {
      background(fondo4);  
    }
    
    if (this.personaje.vida > 0) {
      this.personaje.aplicarGravedad(gravedad);
      this.personaje.mover();
    }

    this.personaje.dibujar();

    for (let obstaculo of this.obstaculos) {
      obstaculo.dibujar();
    }

    if (this.llave) {
      this.llave.dibujar();
    }

    if (this.puertaDerecha) {
      this.puertaDerecha.dibujar();
    }

    if (this.puertaIzquierda) {
      this.puertaIzquierda.dibujar();
    }
  }
}
