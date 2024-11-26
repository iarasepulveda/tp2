class Puntos {
  constructor() {
    this.puntos = 0; // Ahora lleva el conteo de los círculos verdes clickeados
  }

  incrementar() {
    this.puntos++;
  }

  mostrar() {
    textSize(20);
    fill(0);
    text(`Puntos: ${this.puntos} / 3`, -10, 30);
  }

  resetear() {
    this.puntos = 0;
  }

  esGanador() {
    return this.puntos >= 3; // El jugador gana cuando hace clic en 3 círculos verdes
  }
}
