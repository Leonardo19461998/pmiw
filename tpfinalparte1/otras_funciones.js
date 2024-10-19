function configurarTexto(tamano, grosorBorde, colorTexto, colorBorde) {
  textSize(tamano);
  stroke(colorBorde);
  strokeWeight(grosorBorde);
  fill(colorTexto);
}

function pantalla0() {
  configurarTexto(60, 6, 0, 255);
  text("ANGRY BIRDS\nLA AVENTURA GRÁFICA", 40,200);
}

function pantalla1() {
  configurarTexto(30, 6, 0, 255);
  text("Bienvenido al pacífico Reino de los Pájaros,\ndonde la vida transcurre en armonía...\n hasta que algo inesperado rompe la calma.", 30, 50);
}


function pantalla2() {
  configurarTexto(30, 6, 0, 255);
  text("Los cerdos han llegado a la isla y, en un acto\nde traición, han robado los preciados huevos.\nLos pájaros deben unirse y luchar\npor lo que es suyo.", 10, 30);
}

function pantalla3() {
  configurarTexto(30, 6, 0, 255);
  text("Red, Chuck, Bomb y sus amigos se organizan\nen un escuadrón rebelde\npara recuperar los huevos.\n ¿Deberían atacar de inmediato o buscar aliados?", 10, 50);
}

function pantalla4() {
  configurarTexto(30, 6, 0, 255);
  text("Con la sabiduría de Mighty Eagle y la estrategia\nbien pensada, el escuadrón se fortalece.\nEstán listos parala primera batalla.\nEl escuadrón debe decidir:\n¿usar nuevas habilidades o\nconfiar en técnicas tradicionales?" , 10, 60);
}

function pantalla5(){
  configurarTexto(30, 6, 0, 255);
  text("Los pajaros atacaron con todo con sus\ntecnicas tradicionales, pero...", 60, 60);


}

function pantalla6() {
  configurarTexto(30, 6, 0, 255);
  text("El equipo ha superado la primera batalla.\n Gracias a las nuevas habilidades aprendidas,\n avanzan con más confianza hacia el desafío final.", 10, 40);
}

function pantalla7() {
  configurarTexto(30, 6, 0, 255);
  text("Finalmente han llegado a la fortaleza del\nRey Cerdo. El escuadrón debe decidir si atacar\ndirectamente o enviar un espía para obtener\ninformación crucial.", 40, 40);
}

function pantalla8() {
 configurarTexto(30, 6, 0, 255);
  text("Decidieron atacar directamente\nsin saber que era una trampa", 130, 100); 

}

function pantalla9() {
 configurarTexto(30, 6, 0, 255);
  text("Gracias a un valiente espía, el equipo descubre\n la debilidad estructural de la fortaleza cerdo.\n La victoria está al alcance.", 20, 30);
}

function pantalla10(){
 configurarTexto(30, 6, 0, 255);
  text("Con la información obtenida,\n los pájaros planifican un ataque certero.\n La batalla final por los huevos\n está a punto de comenzar.", 10, 30);
}

function pantalla11(){
 configurarTexto(30, 6, 0, 255);
  text("Al confiar en técnicas anticuadas, el escuadrón\n fracasó. Los pájaros pierden y gana el Rey Cerdo.\n¡Game Over!", 10, 40);
}

function pantalla12(){
 configurarTexto(30, 6, 0, 255);
 text("El Rey Cerdo ha sido derrotado.\nLa fortaleza está en ruinas\n y los cerdos están en retirada.", 120, 40);
}

function pantalla13(){
  configurarTexto(30, 6, 0, 255);
  text("El escuadrón atacó sin estrategia y fue derrotado.\nLos cerdos ganan la primera batalla.\n¡Game Over!", 10, 30);


}
function pantalla14(){
 configurarTexto(30, 6, 0, 255);
  text("Decidieron atacar inmediatamente\nesto los puso grabemente en peligro...", 90, 60);

}
function pantalla15(){
 configurarTexto(30, 6, 0, 255);
  text("El ataque falló y los cerdos\n lograron huir con los huevos.\nLa misión ha fracasado.\n¡Game Over!", 20, 40);



}

function pantalla16(){
 configurarTexto(30, 6, 0, 255);
  text("Con estrategia y valentía, los pájaros han\nderrotado a los cerdos y recuperado sus huevos.\nEl Reino de los Pájaros vuelve a estar en paz.\n¡Felicidades!", 10, 30);
}

function pantalla17(){
 configurarTexto(70, 6, 0, 255);
  text("Leonardo Caballero\nGeronimo Perez\nComision 5", 30, 150);
}




function dibujarBotones() {
  
  let posicionBotonY = height - 80; 

  
  if (pantallaActual === 0) {
    fill(0);
    textSize(23);
    text("Jugar", 130, 460);
    ellipse(width / 4, posicionBotonY, 50, 50); 
    fill(255,0,0);
    textSize(23);
    text("Créditos", 442, 460);
    ellipse((3 * width) / 4, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 1) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 2) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 3) {
    fill(0);
    textSize(23);
    text("Atacar", 126, 460);
    ellipse(width / 4, posicionBotonY, 50, 50); 
    fill(0);
    textSize(23);
    text("Aliarse", 450, 460);
    ellipse((3 * width) / 4, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 4) {
    fill(0);
    textSize(23);
    text("Técnicas tradicionales", 63, 460);
    ellipse(width / 4, posicionBotonY, 50, 50); 
    fill(0);
    textSize(23);
    text("Nuevas habilidades", 385, 460);
    ellipse((3 * width) / 4, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 5) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 6) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 7) {
    fill(0);
    textSize(23);
    text("Atacar", 126, 460);
    ellipse(width / 4, posicionBotonY, 50, 50); 
    fill(0);
    textSize(23);
    text("Enviar espía", 420, 460);
    ellipse((3 * width) / 4, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 8) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 9) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 10) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 12) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  } else if (pantallaActual === 14) {
    fill(0);
    textSize(23);
    text("Continuar", 270, 460);
    ellipse(width / 2, posicionBotonY, 50, 50); 
  }

  
  if (pantallaActual === 11 || pantallaActual === 13 || pantallaActual === 15 || pantallaActual === 16 || pantallaActual === 17) {
    fill(0, 0, 255);
    textSize(23);
    text("Volver", 558, 460);
    ellipse(width - 50, posicionBotonY, 50, 50); 
  }
}

function mousePressed() {
  let posicionBotonY = height - 80;

  if (pantallaActual === 0) {
    if (dist(mouseX, mouseY, width / 4, posicionBotonY) < 25) {
      pantallaActual = 1;
    } else if (dist(mouseX, mouseY, (3 * width) / 4, posicionBotonY) < 25) { 
      pantallaActual = 17;
    }
  } else if (pantallaActual === 1) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 2;
    }
  } else if (pantallaActual === 2) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 3;
    }
  } else if (pantallaActual === 3) {
    if (dist(mouseX, mouseY, width / 4, posicionBotonY) < 25) {
      pantallaActual = 14;
    } else if (dist(mouseX, mouseY, (3 * width) / 4, posicionBotonY) < 25) {
      pantallaActual = 4;
    }
  } else if (pantallaActual === 4) {
    if (dist(mouseX, mouseY, width / 4, posicionBotonY) < 25) {
      pantallaActual = 5;
    } else if (dist(mouseX, mouseY, (3 * width) / 4, posicionBotonY) < 25) {
      pantallaActual = 6;
    }
  } else if (pantallaActual === 5) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 11;
    }
  } else if (pantallaActual === 6) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 7;
    }
  } else if (pantallaActual === 7) {
    if (dist(mouseX, mouseY, width / 4, posicionBotonY) < 25) {
      pantallaActual = 8;
    } else if (dist(mouseX, mouseY, (3 * width) / 4, posicionBotonY) < 25) {
      pantallaActual = 9;
    }
  } else if (pantallaActual === 8) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 15;
    }
  } else if (pantallaActual === 9) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 10;
    }
  } else if (pantallaActual === 10) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 12;
    }
  } else if (pantallaActual === 12) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 16;
    }
  } else if (pantallaActual === 14) {
    if (dist(mouseX, mouseY, width / 2, posicionBotonY) < 25) {
      pantallaActual = 13;
    }
  }

  
  if ((pantallaActual === 11 || pantallaActual === 13 || pantallaActual === 15 || pantallaActual === 16 || pantallaActual === 17) && dist(mouseX, mouseY, width - 50, posicionBotonY) < 25) {
    pantallaActual = 0;
  }
}
