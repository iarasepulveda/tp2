class Canasta {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.ancho = 80;
    this.alto = 20;
    this.velocidad = 10; //hay que buscar otra manera para que se deslice mas fluida, esto q puse no estaria funcionando loco
  }

  mover(direccion) {
    if (direccion === "izquierda" && this.x > 0) {
      this.x -= 5;
    } else if (direccion === "derecha" && this.x < width - this.ancho) {
      this.x += 5;
    }
  }

  mostrar() {
    fill(150);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  atrapaObjeto(obj) {
    return (obj.y >= this.y && obj.y <= this.y + this.alto &&
            obj.x >= this.x && obj.x <= this.x + this.ancho);
  }
}
