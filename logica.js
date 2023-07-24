let contenedorProds = document.getElementById("selectedProd");

//Preguntas de datos
alert("Bienvenido a la Tienda de Mangas Online");
let selectedOption = prompt("Que desea hacer?\n1-Filtrar por precio\n2-Filtrar por serie\n3-Mostrar todo\n0-Salir");
console.log(selectedOption)
while(selectedOption != '0'){
  console.log(selectedOption)
  switch(selectedOption){
    case '1':
      let inputPrice = parseFloat(prompt("Ingrese el precio máximo que puede pagar"));
      while(isNaN(inputPrice) || inputPrice < 0){
        alert("Por favor ingrese un numero valido");
        let inputPrice = parseFloat(prompt("Ingrese el precio máximo que puede pagar"));
      }
      const filteredProd = filtrarPorPrecio(inputPrice);
      renderizarProductos(filteredProd);
      break;
    case '2':
      let selectedSerie = prompt("Que serie desea que se muestre?\n1-Chainsaw Man\n2-Fire Punch\n3-Komi San\n4-Oshi no Ko\n5-Solo Leveling");
      switch (selectedSerie){
        case '1':
          renderizarProductos(filtrarPorNombreSerie("Chainsaw Man"));
          break;
        case '2':
          renderizarProductos(filtrarPorNombreSerie("Fire Punch"));
          break;
        case '3':
          renderizarProductos(filtrarPorNombreSerie("Komi San"));
          break;
        case '4':
          renderizarProductos(filtrarPorNombreSerie("Oshi no Ko"));
          break;
        case '5':
          renderizarProductos(filtrarPorNombreSerie("Solo Leveling"));
          break;
        default:
          alert("Ingrese una opción válida!!!");
          break;
      }
      break;
    case '3':
      renderizarProductos(productos);
      break;
    default:
      alert("Ingrese una opción válida!!!");
      break;
  }

  selectedOption = prompt("Que desea hacer?\n1-Filtrar por precio\n2-Filtrar por serie\n3-Mostrar todo\n0-Salir");
}

//Filtros
function filtrarPorPrecio(maxPrice) {
  const filteredProd = productos.filter((producto) => producto.precio <= maxPrice);
  console.table(filteredProd);
  return filteredProd;
}

function filtrarPorNombreSerie(nombreSerie) {
  const filteredProd = productos.filter((producto) => producto.serie == nombreSerie);
  console.table(filteredProd);
  return filteredProd;
}

//Renderizacion
function renderizarProductos(listaProds) {
  for (const producto of listaProds){
    contenedorProds.innerHTML += `
    <div class="col-3">
      <div class="card mt-3" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" height="420">
        <div class="card-body">
          <h5 class="card-title">${producto.serie + " - Tomo " + producto.tomo}</h5>
          <p class="card-text">${"$" + producto.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    `
  }
}