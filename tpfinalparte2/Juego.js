class Juego {
  constructor(cantidadParedes) {
    this.estado = "tutorial"; // tutorial, jugando, ganaste, perdiste, creditos
    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje();
    this.crearSalida(600, 440, 40); //aca podes cambiar la posicion del cuadrado azull
    this.Tutorial1 = new Tuto();
  }

  dibujar() {
    if (this.estado === "tutorial") {
      this.crearTutorial();
    } else if (this.estado === "creditos") {
      this.mostrarCreditos();
    } else if (this.estado === "jugando") {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();
      this.benson1.dibujar();
      this.salida.salidaDelVideojuego();
      this.Perseguir();
      this.Salida();

      for (let pared of this.paredes) {
        pared.dibujar();
      }
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.estado === "ganaste" ? "¡Ganaste!" : "Perdiste", width / 2, height / 2 - 50); // el signo ? funciona com un if y un else pero de forma corta, se llama expresion ternaria por si te pregunta el profe

      this.mostrarReinicio();
    }
  }

  crearPersonaje() {
    this.rigby1 = new Rigby(200, height / 2);
    this.mordecai1 = new Mordecai(); // mordecai definido
    this.benson1 = new Benson();
  }

  crearParedes() {
    this.paredes = [];
    for (let i = 0; i < this.cantidadParedes; i++) {
      this.paredes.push(new Pared(i * 50, 100));
    }
  }

  crearSalida(posX, posY, tam) {
    this.salida = new Salida(posX, posY, tam);
  }

  crearTutorial() {
    this.Tutorial1.texto("Tutorial: Usa las flechas para moverte", width / 2, height / 3, 2, 255);

    // boton para comenzar
    this.Tutorial1.BotonDiseño(width / 2, height / 2, 120, 50, 100, "COMENZAR");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 2, 120, 50)) {
      this.estado = "jugando";
    }

    // boton para ir a créditos
    this.Tutorial1.BotonDiseño(width / 2, height / 1.5, 120, 50, 150, "CRÉDITOS");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.5, 120, 50)) {
      this.estado = "creditos";
    }
  }

  mostrarCreditos() {
    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 4);
    text("nombre:", width / 2, height / 2 - 20);


    // boton para volver al inicio, que seria el estado "tutorial"
    this.Tutorial1.BotonDiseño(width / 2, height - 100, 150, 50, 255, "VOLVER");
    if (this.Tutorial1.BotonPresionado(width / 2, height - 100, 150, 50)) {
      this.estado = "tutorial";
    }
  }

  mostrarReinicio() {
    /*cambie la posición del boton de reinicio para q esté un poco más abajo. es el 1.3 pero
     cambia la posicion del boton a donde quieras mientras no se superponga con los demas botones*/
    this.Tutorial1.BotonDiseño(width / 2, height / 1.3, 150, 50, 255, "Reiniciar");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.3, 150, 50)) {
      this.reiniciarJuego();
    }
  }



  reiniciarJuego() {
    this.estado = "tutorial";
    this.crearPersonaje();
    this.crearParedes();

    this.Tutorial1 = new Tuto(); // si necesitas reiniciar la instancia de Tuto
  }


  Perseguir() {
    // Benson persigue a Rigby
    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);
    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "perdiste";
    }

    // aca Mordecai sigue a Rigby peroo sin colisionar
    this.mordecai1.seguirSinColision(this.rigby1.posX, this.rigby1.posY);
  }

  Salida() {
    if (this.salida.escapar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "ganaste";
    }
  }
}
