let imagenes = []; 

let estado = 0; 

let escrito = [];

function preload() {
  for (let i = 0; i < 14; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
  }
}

function cargarTexto() {
  escrito[0] = "El narrador escribe una carta a Andrée, desde su departamento en Buenos Aires.";
  escrito[1] = "Confiesa que tiene un problema insólito.";
  escrito[2] = "Describe la primera vez que vomitó un conejo de forma inesperada y decide entonces:";
  escrito[3] = "Sara, asustada y convencida de que el hombre está loco, llama a la policía.";
  escrito[4] = "Decide ocultar el hecho, pero le preocupa cómo manejar la situación";
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
  cargarTexto(); 
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].resize(640, 480); 
  }
}

function draw() {
  background(200);
  fill(250);
  if (estado >= 0 && estado < imagenes.length) { // Verificar que el estado sea válido
    let img = imagenes[estado];
    let x = width / 2; // Centro del canvas en x
    let y = height / 2; // Centro del canvas en y

    cargarImagenes(img, x, y, img.width, img.height, CENTER); // Usar CENTER
    text(escrito[estado], 120, 240, 400);
    
    // Se dibuja el botón "Siguiente" 
    if (estado === 0 || estado === 1 ) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    }
  
    // Dibuja botones de las opciones en el estado 3
    if (estado === 2) {
      dibujaBoton("Tratar de ocultarlo", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Contárselo a Sara", width / 2 + 100, height * 0.75, 165, 50);
    }
  }
}

function cargarImagenes(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea); // Alinear la imagen
  image(imag, x, y, ancho, alto); // Dibujar la imagen en el canvas
}

function dibujaBoton(txt, x, y, w, h) {
  push(); 
  rectMode(CENTER);
  // Efecto hover
  if (botonSobreMouse(x, y, w, h)) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h); // Dibujar el botón
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y); // Mostrar el texto del botón
  pop();
}

function botonSobreMouse(x, y, w, h) {
  return (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2);
}

function mousePressed() {
  // Avanzar a los estados 1 y 2 al hacer clic en "Siguiente"
  if (estado === 0 && botonSobreMouse(width - 100, height - 50, 100, 50)) {
    estado = 1;
  } else if (estado === 1 && botonSobreMouse(width - 100, height - 50, 100, 50)) {
    estado = 2;
  }

  // las opciones en el estado 
  if (estado === 2) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 100, 50)) { // boton "Trata de ocultarlo"
      estado = 3; 
    } else if (botonSobreMouse(width / 2 + 100, height * 0.75, 100, 50)) { // boton "Contárselo a sara"
      estado = 0;
    }
  }

  // las opciones en el estado 3
  if (estado === 3) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 100, 50)) { // Opción 1
      estado = 4; 
    } else if (botonSobreMouse(width / 2 + 100, height * 0.75, 100, 50)) { // Opción 2
      estado = 0;
    }
  }
}
