class Juego {
  constructor() {
    this.estado = "inicio"; // estado inicial
    this.nivel = 1;
    this.puntos = 0;
    this.fallos = 0;
    this.sigNivel = 5;

    this.canasta = new Canasta();
    this.conejos = [];

    this.botonInicio = new Boton("INICIAR", width / 2, height * 0.75, 100, 40);
    this.botonReiniciar = new Boton("REINICIAR", width / 2, height * 0.75, 120, 40); // boton de reinicio

    this.generarConejos();
  }

  generarConejos() {
    this.conejos = [];
    let cantidadConejos = 5 + this.nivel * 3;
    for (let i = 0; i < cantidadConejos; i++) {
      this.conejos.push(new Conejo());
    }
  }

  actualizar() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "jugando") {
      this.canasta.actualizar();

      for (let conejo of this.conejos) {
        conejo.actualizar();
        if (conejo.evaluaColision(this.canasta.x, this.canasta.y, this.canasta.ancho)) {
          if (conejo.tipo === 0) {
            this.puntos++;
          } else {
            this.fallos++;
          }
          conejo.reiniciarUbicacion();
        }
      }

      this.mostrarHUD();

      if (this.puntos >= this.sigNivel) {
        this.avanzarNivel();
      }

      if (this.fallos >= 5) {
        this.finDelJuego("¡Perdiste!");
      }
    } else if (this.estado === "perdido") {
      this.pantallaPerdiste();
    } else if (this.estado === "ganaste") {
      this.pantallaGanaste();
    }
  }

  pantallaInicio() {
    background(200, 100, 100);
    this.botonInicio.actualizar();
  }

  pantallaPerdiste() {
    background(100, 0, 0); // FOTO para el estado de PERDISTE
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡Perdiste!", width / 2, height / 2 - 50);

    textSize(20);
    this.botonReiniciar.actualizar();
  }

  pantallaGanaste() {
    background(0, 200, 0); // poner foto para el estado de "GANASTE"
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡Ganaste todos los niveles!", width / 2, height / 2 - 50);

    textSize(20);
    this.botonReiniciar.actualizar();
  }

  mousePressed() {
    if (this.estado === "inicio" && this.botonInicio.colisionMouse()) {
      //comineza el juego
      this.estado = "jugando";
      this.nivel = 1;
      this.puntos = 0;
      this.fallos = 0;
      this.generarConejos();
    } else if ((this.estado === "perdido" || this.estado === "ganaste") && this.botonReiniciar.colisionMouse()) {
      // te reinicia el juego si el estado es "perdido" o "ganaste"
      this.reiniciarJuego();
    }
  }

  avanzarNivel() {
    this.nivel++;
    this.sigNivel += 5;
    this.puntos = 0;
    this.fallos = 0;
    this.generarConejos();

    if (this.nivel > 3) {
      this.finDelJuego("¡Ganaste todos los niveles!");
    }
  }

  finDelJuego(mensaje) {
    if (mensaje === "¡Perdiste!") {
      this.estado = "perdido"; // se cambia el estado a "perdido"
    } else {
      this.estado = "ganaste"; // se cambia el estado a "ganaste"
    }
  }

  reiniciarJuego() {
    this.estado = "inicio";
    this.nivel = 1;
    this.puntos = 0;
    this.fallos = 0;
    this.sigNivel = 5;
    this.generarConejos();
    loop(); // se reinicia el bucle del juego //a veces anda medio lento pero ni idea a
  }

  mostrarHUD() {
    fill(0);
    textSize(20);
    text(`Nivel: ${this.nivel}`, 40, 30);
    text(`Puntos: ${this.puntos}`, 50, 60);
    text(`Fallos: ${this.fallos}`, 45, 90);
  }
}
