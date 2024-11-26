let assets = {}; // Objeto para almacenar los recursos
let sonidos = {}; // Objeto para los sonidos
let juego; // Instancia de la clase Juego

function preload() {
  // Cargar las imágenes
  assets.inicioImg = loadImage("data/inicio.jpg");
  assets.ganadorImg = loadImage("data/ganador.jpg");
  assets.perdisteImg = loadImage("data/perdiste.jpg");

  assets.basura = [
    loadImage("data/basura_0.png"),
    loadImage("data/basura_1.png"),
    loadImage("data/basura_2.png"),
    loadImage("data/basura_3.png"),
    loadImage("data/basura_4.png"),
    loadImage("data/basura_5.png"),
    loadImage("data/basura_6.png"),
    loadImage("data/basura_7.png")
  ];

  // Cargar los sonidos dentro de preload para asegurarse de que estén listos
  sonidos.sonidoGanador = loadSound("data/ganador.mp3");
  sonidos.sonidoPerdedor = loadSound("data/perdedor.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); // Crear una nueva instancia del juego
}

function draw() {
  juego.mostrar();
}

function mousePressed() {
  // Delegar la interacción del mouse al juego y a la pantalla actual
  juego.pantallas.manejarClic(mouseX, mouseY, juego);
}
