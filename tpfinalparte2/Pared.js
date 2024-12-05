class Pared {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    fill(80);
    rect(this.posX, this.posY, 40, 40);
  }
}
