// Función para mostrar los productos disponibles
function verProductosDisponibles() {
  // Crear un elemento div para mostrar los productos disponibles
  var productosDisponibles = document.createElement("div");

  // Crear un elemento p para mostrar el título de los productos disponibles
  var tituloProductosDisponibles = document.createElement("p");
  tituloProductosDisponibles.textContent = "Productos disponibles:";
  productosDisponibles.appendChild(tituloProductosDisponibles);

  // Crear un elemento p para mostrar cada producto disponible
  var producto1 = document.createElement("p");
  producto1.textContent = "Azúcar: $10";
  productosDisponibles.appendChild(producto1);

  var producto2 = document.createElement("p");
  producto2.textContent = "Sal: $5";
  productosDisponibles.appendChild(producto2);

  var producto3 = document.createElement("p");
  producto3.textContent = "Arroz: $15";
  productosDisponibles.appendChild(producto3);

  var producto4 = document.createElement("p");
  producto4.textContent = "Harina: $12";
  productosDisponibles.appendChild(producto4);

  var producto5 = document.createElement("p");
  producto5.textContent = "Fideos: $8";
  productosDisponibles.appendChild(producto5);

  var producto6 = document.createElement("p");
  producto6.textContent = "Alimentos para el desayuno: $20";
  productosDisponibles.appendChild(producto6);

  var producto7 = document.createElement("p");
  producto7.textContent = "Leche: $18";
  productosDisponibles.appendChild(producto7);

  var producto8 = document.createElement("p");
  producto8.textContent = "Aceite: $25";
  productosDisponibles.appendChild(producto8);

  var producto9 = document.createElement("p");
  producto9.textContent = "Condimentos: $30";
  productosDisponibles.appendChild(producto9);

  var producto10 = document.createElement("p");
  producto10.textContent = "Salsa de tomate: $35";
  productosDisponibles.appendChild(producto10);

  var producto11 = document.createElement("p");
  producto11.textContent = "Queso rallado: $40";
  productosDisponibles.appendChild(producto11);

  var producto12 = document.createElement("p");
  producto12.textContent = "Huevos: $45";
  productosDisponibles.appendChild(producto12);

  var producto13 = document.createElement("p");
  producto13.textContent = "Levadura: $50";
  productosDisponibles.appendChild(producto13);

  var producto14 = document.createElement("p");
  producto14.textContent = "Pan: $55";
  productosDisponibles.appendChild(producto14);

  var producto15 = document.createElement("p");
  producto15.textContent = "Carne: $60";
  productosDisponibles.appendChild(producto15);

  var producto16 = document.createElement("p");
  producto16.textContent = "Yogur: $65";
  productosDisponibles.appendChild(producto16);

  var producto17 = document.createElement("p");
  producto17.textContent = "Margarina o mantequilla: $70";
  productosDisponibles.appendChild(producto17);

  // Mostrar los productos disponibles en la página web
  document.getElementById("productosDisponibles").appendChild(productosDisponibles);

}

// Función para mostrar el carrito de compras
function mostrarCarritoDeCompras() {
  // Crear un elemento div para mostrar el carrito de compras
  var carritoDeCompras = document.createElement("div");

  // Crear un elemento p para mostrar el título del carrito de compras
  var tituloCarritoDeCompras = document.createElement("p");
  tituloCarritoDeCompras.textContent = "Carrito de compras:";
  carritoDeCompras.appendChild(tituloCarritoDeCompras);

  // Crear un elemento p para mostrar cada producto agregado al carrito de compras
  var productoAgregado1 = document.createElement("p");
  productoAgregado1.textContent = "Producto 1: $10";
  carritoDeCompras.appendChild(productoAgregado1);

  var productoAgregado2 = document.createElement("p");
  productoAgregado2.textContent = "Producto 2: $5";
  carritoDeCompras.appendChild(productoAgregado2);

  // Mostrar el carrito de compras en la página web
  document.getElementById("carritoDeCompras").appendChild(carritoDeCompras);
  // Mostrar el carrito de compras al lado del botón "Ver productos disponibles"
  document.getElementById("carritoDeCompras").style.display = "inline-block";
}

// Función para mostrar los productos agotados
function verProductosAgotados() {
  // Crear un elemento div para mostrar los productos agotados
  var productosAgotados = document.createElement("div");

  // Crear un elemento p para mostrar el título de los productos agotados
  var tituloProductosAgotados = document.createElement("p");
  tituloProductosAgotados.textContent = "Productos agotados:";
  productosAgotados.appendChild(tituloProductosAgotados);

  // Crear un elemento p para mostrar cada producto agotado
  var producto1 = document.createElement("p");
  producto1.textContent = "Jabón blanco";
  productosAgotados.appendChild(producto1);

  var producto2 = document.createElement("p");
  producto2.textContent = "Jabón en polvo";
  productosAgotados.appendChild(producto2);

  var producto3 = document.createElement("p");
  producto3.textContent = "Detergente";
  productosAgotados.appendChild(producto3);

  var producto4 = document.createElement("p");
  producto4.textContent = "Desinfectante";
  productosAgotados.appendChild(producto4);

  var producto5 = document.createElement("p");
  producto5.textContent = "Suavizante";
  productosAgotados.appendChild(producto5);

  var producto6 = document.createElement("p");
  producto6.textContent = "Lustramuebles";
  productosAgotados.appendChild(producto6);

  var producto7 = document.createElement("p");
  producto7.textContent = "Alcohol en gel";
  productosAgotados.appendChild(producto7);

  var producto8 = document.createElement("p");
  producto8.textContent = "Cloro";
  productosAgotados.appendChild(producto8);

  var producto9 = document.createElement("p");
  producto9.textContent = "Insecticida";
  productosAgotados.appendChild(producto9);

  var producto10 = document.createElement("p");
  producto10.textContent = "Esponja";
  productosAgotados.appendChild(producto10);

  var producto11 = document.createElement("p");
  producto11.textContent = "Esponja de acero";
  productosAgotados.appendChild(producto11);

  var producto12 = document.createElement("p");
  producto12.textContent = "Bolsas de basura";
  productosAgotados.appendChild(producto12);

  var producto13 = document.createElement("p");
  producto13.textContent = "Guantes de plástico";
  productosAgotados.appendChild(producto13);

  var producto14 = document.createElement("p");
  producto14.textContent = "Franelas";
  productosAgotados.appendChild(producto14);

  var producto15 = document.createElement("p");
  producto15.textContent = "Carne: $60";
  productosDisponibles.appendChild(producto15);

  var producto16 = document.createElement("p");
  producto16.textContent = "Yogur: $65";
  productosDisponibles.appendChild(producto16);

  var producto17 =document.createElement("p");
  producto17.textContent = "Margarina o mantequilla: $70";
  productosDisponibles.appendChild(producto17);

  // Agregar un botón para seleccionar cada producto
  var botonesSeleccionar = [];
  for (var i = 0; i < productosDisponibles.children.length; i++) {
      var botonSeleccionar = document.createElement("button");
      botonSeleccionar.textContent = "Seleccionar";
      botonSeleccionar.addEventListener("click", function() {
          seleccionarProducto(this.parentElement.firstChild.textContent);
      });
      productosDisponibles.children[i].appendChild(botonSeleccionar);
      botonesSeleccionar.push(botonSeleccionar);
  }

  // Mostrar los productos agotados en la página web
  document.getElementById("productosAgotados").appendChild(productosAgotados);

  // Mostrar los productos disponibles en la página web
  document.getElementById("productosDisponibles").appendChild(productosDisponibles);
}

// Función para seleccionar un producto
function seleccionarProducto(producto) {
  // Crear un elemento p para mostrar el producto seleccionado
  var productoSeleccionado = document.createElement("p");
  productoSeleccionado.textContent = producto;

  // Crear un botón para eliminar el producto del carrito
  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function() {
      eliminarProducto(this.parentElement);
  });

  // Agregar el botón al producto seleccionado
  productoSeleccionado.appendChild(botonEliminar);

  // Agregar el producto seleccionado al carrito de compras
  document.getElementById("carritoDeCompras").appendChild(productoSeleccionado);
}

// Función para eliminar un producto del carrito de compras
function eliminarProducto(producto) {
  producto.remove();
}

// Asignar lafunción a los botones
document.getElementById("verProductosDisponibles").addEventListener("click", verProductosDisponibles);
document.getElementById("carrito").addEventListener("click", mostrarCarritoDeCompras, function() {
  // Mostrar el carrito de compras
  document.getElementById("carritoDeCompras").style.display = "block";
});