let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(220);
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    juego.canasta.mover("izquierda");
  } else if (keyCode === RIGHT_ARROW) {
    juego.canasta.mover("derecha");
  }
}
