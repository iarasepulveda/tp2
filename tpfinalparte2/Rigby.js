class Rigby {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 30; // tamdel personaje
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(rigbysprite, this.posX, this.posY); // imagen de Rigby
    pop();
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  moverArriba() {
    this.posY -= 10;
  }

  moverAbajo() {
    this.posY += 10;
  }
}
