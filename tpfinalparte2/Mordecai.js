class Mordecai {
  constructor() {
    this.posX = 200; // misma posición X inicial que Rigby
    this.posY = 260; 
    this.tam = 30; // tam de Mordecai
    this.distanciaMinima = 40; // distancia para evitar que se superponga en Rigby
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(mordecaisprite, this.posX, this.posY); //imagen de Mordecai
    pop();
  }

  seguirSinColision(posX, posY) {
    let distanciaX = abs(this.posY - posY);

    // ajusta su posición en el eje Y si está fuera de la distancia mínima :  this.distanciaMinima = 40;
    if (distanciaX > this.distanciaMinima) {
      if (this.posY < posY) {
        this.posY += 1.2; // vel hacia abajo
      } else if (this.posY > posY) {
        this.posY -= 1.2; // vel hacia arriba
      }
    }

   
    this.posX = posX// eje X alineado con Rigby
  }
}
