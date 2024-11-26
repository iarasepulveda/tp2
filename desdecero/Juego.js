class Juego {
  constructor() {
    this.estado = "inicio"; // Estado inicial
    this.figuras = [];
    this.puntos = new Puntos();
    this.botonIniciar = new Boton("Iniciar", width / 2 - 50, height / 2 + 80, 100, 30);
    this.botonReiniciar = new Boton("Jugar otra vez :)", width / 2 - 50, height / 2 + 40, 150, 30);
    this.pantallas = new Pantallas(); // Nueva instancia de Pantallas
    this.generarFiguras();
  }

  generarFiguras() {
    for (let i = 0; i < 10; i++) {
      let tipo = random(["circulo", "triangulo"]);
      this.figuras.push(new Figura(tipo));
    }
  }

  mostrar() {
    // Delegar la lógica de mostrar la pantalla
    this.pantallas.mostrarEstado(this);
  }

  click(px, py) {
    // Delegar la lógica del clic
    this.pantallas.manejarClic(px, py, this);
  }

  teclaPresionada(tecla) {
    // Aquí puedes manejar la lógica de las teclas si es necesario
  }

  reiniciar() {
    this.puntos.resetear();
    this.figuras = [];
    this.generarFiguras();
    this.pantallas.cambiarEstado("inicio"); // Restablecer el estado a "inicio"
  }
}
