class Boton {
  constructor(texto, x, y, ancho, alto) {
    this.texto = texto; // El texto que tendrá el botón
    this.x = x;         // Posición en el eje X
    this.y = y;         // Posición en el eje Y
    this.ancho = ancho; // Ancho del botón
    this.alto = alto;   // Alto del botón
  }

  mostrar() {
    fill(0, 200, 0); // Color de fondo verde
    rect(this.x, this.y, this.ancho, this.alto, 10); // Botón con bordes redondeados
    fill(255); // Color del texto blanco
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2); // Mostrar el texto en el centro del botón
  }

  clicDentro(px, py) {
    // Verifica si el clic está dentro del área del botón
    return px > this.x && px < this.x + this.ancho && py > this.y && py < this.y + this.alto;
  }
}
