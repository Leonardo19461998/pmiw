class Juego {
  constructor() {
    this.gravedad = 0.5;
    this.pantallas = [];
    this.pantallaActual = 4;
    this.crearPantallas(personajeImg);
  }

  crearPantallas(personajeImg) {
    let personaje1 = new Personaje(50, 400, personajeImg);
    let obstaculos1 = [new Obstaculo(200, 380), new Obstaculo(400, 380)];
    let puerta1Derecha = new Puerta(600, 350);
    let pantalla1 = new Pantalla(personaje1, obstaculos1, null, puerta1Derecha);
    this.pantallas.push(pantalla1);

    let personaje2 = new Personaje(50, 400);
    let obstaculos2 = [new Obstaculo(250, 380), new Obstaculo(450, 380)];
    let puerta2Izquierda = new Puerta(0, 350);
    let puerta2Derecha = new Puerta(600, 350);
    let pantalla2 = new Pantalla(personaje2, obstaculos2, null, puerta2Derecha, puerta2Izquierda);
    this.pantallas.push(pantalla2);

    let personaje3 = new Personaje(50, 400);
    let obstaculos3 = [new Obstaculo(300, 380), new Obstaculo(500, 380)];
    let puerta3Izquierda = new Puerta(0, 350);
    let puerta3Derecha = new Puerta(600, 350);
    let pantalla3 = new Pantalla(personaje3, obstaculos3, null, puerta3Derecha, puerta3Izquierda);
    this.pantallas.push(pantalla3);

    let personaje4 = new Personaje(50, 400);
    let obstaculos4 = [new Obstaculo(350, 380)];
    let llave4 = new Llave(600, 350);
    let puerta4Izquierda = new Puerta(0, 350);
    let pantalla4 = new Pantalla(personaje4, obstaculos4, llave4, null, puerta4Izquierda);
    this.pantallas.push(pantalla4);

    this.pantallas.push(new PantallaIntroduccion()); 
    this.pantallas.push(new PantallaInstrucciones()); 
    this.pantallas.push(new PantallaCreditos());
  }

  dibujar() {
    let pantalla = this.pantallas[this.pantallaActual];
    pantalla.dibujar(this.gravedad);

    if (this.pantallaActual < 4) {
      let personaje = pantalla.personaje;
      for (let obstaculo of pantalla.obstaculos) {
        if (this.verificarColision(personaje, obstaculo)) {
          personaje.vida = 0;
        }
      }

      if (personaje.posY > height) {
        personaje.vida = 0;
      }

      if (pantalla.llave && this.verificarColision(personaje, pantalla.llave)) {
        this.ganarJuego();
      }

      if (pantalla.puertaDerecha && this.verificarColision(personaje, pantalla.puertaDerecha)) {
        this.cambiarPantalla(true);
      } else if (pantalla.puertaIzquierda && this.verificarColision(personaje, pantalla.puertaIzquierda)) {
        this.cambiarPantalla(false);
      }
    }
  }

  verificarColision(personaje, objeto) {
    let distancia = dist(personaje.posX, personaje.posY, objeto.posX + 15, objeto.posY + 15);
    return distancia < 40;
  }

  teclaPresionada(keyCode) {
    if (this.pantallaActual === 4) { 
      if (keyCode === ENTER) {
        this.pantallaActual = 5; 
      } else if (key === "c") {
        this.pantallaActual = 6; 
      }
    } else if (this.pantallaActual === 5) { 
      if (keyCode === ENTER) {
        this.pantallaActual = 0;
      }
    } else if (keyCode === 82) { 
      this.reiniciarJuego(); 
      loop();
    } else {
      let pantalla = this.pantallas[this.pantallaActual];
      if (pantalla.personaje && pantalla.personaje.vida > 0) {
        if (keyCode === UP_ARROW && pantalla.personaje.enSuelo) {
          pantalla.personaje.saltar();
        }
        pantalla.personaje.teclaPresionada(keyCode);
      }
    }
  }

  keyReleased() {
    let pantalla = this.pantallas[this.pantallaActual];
    if (pantalla.personaje) {
      pantalla.personaje.keyReleased();
    }
  }

  reiniciarJuego() {
    this.pantallaActual = 4; 
    let personaje1 = new Personaje(50, 400, personajeImg); 
    let pantalla1 = new Pantalla(personaje1, [new Obstaculo(200, 380), new Obstaculo(400, 380)], null, new Puerta(600, 350));
    this.pantallas[0] = pantalla1;
    this.pantallas[1].personaje = new Personaje(50, 400, personajeImg);
    this.pantallas[2].personaje = new Personaje(50, 400, personajeImg);
    this.pantallas[3].personaje = new Personaje(50, 400, personajeImg);
  }

  cambiarPantalla(avanzar) {
    if (avanzar && this.pantallaActual < this.pantallas.length - 1) {
      this.pantallaActual++;
    } else if (!avanzar && this.pantallaActual > 0) {
      this.pantallaActual--;
    }
  }

  ganarJuego() {
    textSize(32);
    fill(255, 0, 0);
    text("¡Has ganado el juego!", width / 2 - 150, height / 2);
    noLoop();
  }
}
