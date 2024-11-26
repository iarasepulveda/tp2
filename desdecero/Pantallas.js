class Pantallas {
  constructor() {
    this.estado = "inicio"; // Estado inicial
    this.mensaje = "";
    this.colorFondo = color(50);
    this.sonidoPerdedorReproducido = false; // Variable para controlar el sonido de perdedor
  }

  mostrarEstado(juego) {
    if (this.estado === "inicio") {
      this.mostrarInicio(juego); // Llama a mostrarInicio cuando el estado es "inicio"
    } else if (this.estado === "jugando") {
      // Mostrar y mover las figuras
      background(255);
      for (let i = 0; i < juego.figuras.length; i++) {
        juego.figuras[i].mover();
        juego.figuras[i].mostrar();
      }
      juego.puntos.mostrar();  // Mostrar puntos en el estado jugando

      // Verificar si el jugador ha ganado
      if (juego.puntos.esGanador()) {
        this.cambiarEstado("ganaste"); // Cambiar a pantalla de ganador si llega a 3 clics correctos
        if (!sonidos.sonidoGanador.isPlaying()) {
          sonidos.sonidoGanador.play(); // Reproducir sonido de ganador solo si no está sonando
        }
      }
    } else if (this.estado === "ganaste") {
      this.mostrar("¡Ganaste! 🎉", color(50, 200, 50), assets.ganadorImg);
    } else if (this.estado === "perdiste") {
      this.mostrar("¡Perdiste! 😢", color(200, 50, 50), assets.perdisteImg);

      // Reproducir sonido de perdedor solo si no se ha reproducido antes
      if (!this.sonidoPerdedorReproducido) {
        sonidos.sonidoPerdedor.play();
        this.sonidoPerdedorReproducido = true; // Marcar que el sonido ya se ha reproducido
      }
    }
  }

  mostrarInicio(juego) {
    if (assets.inicioImg) { // Chequear que la imagen de inicio esté cargada
      background(255); // Fondo blanco antes de poner la imagen
      image(assets.inicioImg, 0, 0, width, height); // Mostrar la imagen de inicio en toda la pantalla
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text("¡Haz clic en 3 círculos verdes para ganar!", width / 2, height / 2 - 40);
      text("Evita los triángulos.", width / 2, height / 2);

      // Mostrar botón de "Iniciar"
      juego.botonIniciar.mostrar();
    }
  }

  mostrar(mensaje, colorFondo, imagenFondo) {
    this.mensaje = mensaje;
    this.colorFondo = colorFondo;

    background(this.colorFondo);
    if (imagenFondo) {
      image(imagenFondo, 0, 0, width, height); // Mostrar la imagen de fondo específica
    }
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.mensaje, width / 2, height / 2 - 40);

    // Mostrar botón de reiniciar cuando se gana o pierde
    if (this.estado === "ganaste" || this.estado === "perdiste") {
      juego.botonReiniciar.mostrar();
    }
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
    // Reiniciar el estado de la reproducción del sonido cuando se cambia el estado
    if (nuevoEstado !== "perdiste") {
      this.sonidoPerdedorReproducido = false;
    }
  }

  manejarClic(px, py, juego) {
    let figuraClicada = false;

    if (this.estado === "inicio") {
      if (juego.botonIniciar.clicDentro(px, py)) {
        this.cambiarEstado("jugando");
        figuraClicada = true;
      }
    } else if (this.estado === "jugando") {
      for (let i = 0; i < juego.figuras.length; i++) {
        if (juego.figuras[i].clicDentro(px, py)) {
          if (juego.figuras[i].tipo === "circulo") {
            juego.puntos.incrementar();
          } else if (juego.figuras[i].tipo === "triangulo") {
            this.cambiarEstado("perdiste");
          }
          juego.figuras.splice(i, 1); // Eliminar la figura clickeada
          figuraClicada = true;
        }
      }
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      if (juego.botonReiniciar.clicDentro(px, py)) {
        juego.reiniciar();
        this.cambiarEstado("inicio");
        figuraClicada = true;
      }
    }

    return figuraClicada;
  }
}
