class Juego {
  constructor() {
    this.nivel = new Nivel();
    this.fallos = new Fallos();
    this.puntos = new Puntos();
    this.sigNivel = new SigNivel();
    this.objetos = new Objetos(this.nivel.obtenerNivel());
    this.canasta = new Canasta();
    this.iniciarNivel();
  }

  iniciarNivel() {
    this.objetos.generarObjetos();
  }

  verificarEstado() {
    if (this.puntos.obtenerPuntos() >= this.sigNivel.obtenerMeta()) {
      this.nivel.incrementarNivel();
      this.sigNivel.incrementarMeta();
      this.iniciarNivel();
    }

    if (this.fallos.obtenerFallos() >= 5) {
      console.log("Perdiste el juego");
      noLoop();
    }
  }

  actualizar() {
    for (let obj of this.objetos.obtenerLista()) {
      obj.caer();
      if (this.canasta.atrapaObjeto(obj)) {
        if (obj instanceof Conejo) {
          this.puntos.incrementarPuntos();
        } else {
          this.fallos.incrementarFallos();
        }
      }
    }
    this.verificarEstado();
  }

  mostrar() {
    this.canasta.mostrar();
    for (let obj of this.objetos.obtenerLista()) {
      obj.mostrar();
    }
    textSize(16);
    fill(0);
    text(`Puntos: ${this.puntos.obtenerPuntos()}`, 10, 20); //no se si puede usar $$$ yo le pregunte esto a chatgpt jsjk
    text(`Fallos: ${this.fallos.obtenerFallos()}`, 10, 40);
  }
}
