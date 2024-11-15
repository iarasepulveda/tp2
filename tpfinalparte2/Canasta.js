class Canasta {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.vel = 7;
    this.ancho = 100;
    this.alto = 20;
  }

  actualizar() {
    this.mover();
    this.dibujar();
  }

  dibujar() {
    fill(100, 200, 100);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        this.x -= this.vel;
      } else if (keyCode === RIGHT_ARROW) {
        this.x += this.vel;
      }
      this.x = constrain(this.x, this.ancho / 2, width - this.ancho / 2);
    }
  }
}
