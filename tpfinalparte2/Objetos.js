class Objetos {
  constructor(nivel) {
    this.lista = [];
    this.nivel = nivel;
  }

  generarObjetos() {
    let cantidadConejos = 5 + this.nivel * 5; //de aca se ajusta la cant
    let cantidadObjetos = 2 + this.nivel * 2;

    for (let i = 0; i < cantidadConejos; i++) {
      this.lista.push(new Conejo(this.nivel));
    }
    for (let i = 0; i < cantidadObjetos; i++) {
      this.lista.push(new ObjetoNoDeseado(this.nivel));
    }
  }

  obtenerLista() {
    return this.lista;
  }
}

class Conejo {
  constructor(nivel) {
    this.x = random(width); //le puse random pero capaz se puede pooner un if
    this.y = 0;
    this.velocidad = 2 + nivel;
  }

  caer() {
    this.y += this.velocidad;
  }

  mostrar() {
    fill(0, 255, 0); // verde para los conejos
    ellipse(this.x, this.y, 20, 20); // representación del conejo /poner img
  }
}

class ObjetoNoDeseado {
  constructor(nivel) {
    this.x = random(width);
    this.y = 0;
    this.velocidad = 2 + nivel;
  }

  caer() {
    this.y += this.velocidad;
  }

  mostrar() {
    fill(255, 0, 0); // rojo para objetos no deseados
    rect(this.x, this.y, 20, 20); // representación del objeto no deseado,,, poner img
  }
}
