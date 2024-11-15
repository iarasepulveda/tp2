class Conejo {
  constructor() {
    this.tipo = int(random(0, 2)); // 0: conejo, 1: no deseado
    this.reiniciarUbicacion();
    this.despY = random(2, 4);
    this.lado = 30;
  }

  actualizar() {
    this.y += this.despY;
    if (this.y > height) {
      this.reiniciarUbicacion();
    }
    this.dibujar();
  }

  dibujar() {
    fill(this.tipo === 0 ? "green" : "red");
    ellipse(this.x, this.y, this.lado);
  }

  reiniciarUbicacion() {
    this.x = random(50, width - 50);
    this.y = -random(100, 400);
  }

  evaluaColision(px, py, pw) {
    return (
      this.y > py - 10 &&
      this.y < py + 10 &&
      this.x > px - pw / 2 &&
      this.x < px + pw / 2
    );
  }
}

class Boton {
  constructor(txt, x, y, ancho, alto) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.colorReposo = color(100, 220, 0);
    this.colorOver = color(255, 100, 100);
  }

  actualizar() {
    fill(this.colisionMouse() ? this.colorOver : this.colorReposo);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.txt, this.x, this.y);
  }

  colisionMouse() {
    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
    );
  }
}
