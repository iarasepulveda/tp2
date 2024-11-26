class Figura {
  constructor(tipo) {
    this.tipo = tipo; // Puede ser "circulo" o "triangulo"
    this.x = random(width);
    this.y = random(-200, -50); // Aparece fuera de la pantalla
    this.velocidad = random(2, 5); // Velocidad de caída
    this.tamaño = random(50, 80); // Tamaño de la figura (más grande)

    // Dividir las imágenes por tipo
    let basuraTipos = {
    "circulo":
    [0, 2, 4], // Índices de imágenes verdes
    "triangulo":
    [1, 3, 5, 6, 7] // Índices de imágenes de triángulos
  };

  // Seleccionar la imagen correspondiente
  let opciones = basuraTipos[tipo];
  let indice = int(random(opciones.length)); // Índice aleatorio dentro del grupo
  this.imagen = assets.basura[opciones[indice]]; // Imagen basada en el índice seleccionado
}

mover() {
  this.y += this.velocidad;

  // Si sale de la pantalla por abajo, reiniciarla desde arriba
  if (this.y > height) {
    this.y = random(-200, -50); // Reaparecer arriba
    this.x = random(width);    // Cambiar posición horizontal aleatoria
  }
}

mostrar() {
  // Dibujar la imagen en lugar de la figura
  if (this.imagen) {
    image(this.imagen, this.x, this.y, this.tamaño, this.tamaño);
  }
}

clicDentro(mx, my) {
  // Verificar si el clic está dentro del área de la figura
  return mx > this.x && mx < this.x + this.tamaño && my > this.y && my < this.y + this.tamaño;
}
}
