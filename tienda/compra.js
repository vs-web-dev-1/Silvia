//array de productos
let productos = [
  { nombre: "Libreta", valor: 10, cantidad: 2, exento: false },
  { nombre: "Rotulador", valor: 3.5, cantidad: 5, exento: false },
  { nombre: "Boligrafo", valor: 2.5, cantidad: 3, exento: false },
  { nombre: "Lapiz", valor: 1, cantidad: 1, exento: false },
  { nombre: "Curso", valor: 100, cantidad: 2, exento: true },
];

//se permite comprar entre una y diez unidades de cada
//agregar productos al carrito con su nombre, cantidad comprada y precio unitario
function calcularTotalConIva(productos) {
  let totalCarrito = {
    totalBase: 0,
    totalCuota: 0,
    totalGeneral: 0,
  };
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let totalLinea = producto.cantidad * producto.valor;
    totalCarrito.totalBase += totalLinea;
    let coutaLinea = producto.exento ? 0 : calcularCuotaIva(totalLinea);
    totalCarrito.totalCuota += coutaLinea;
    totalCarrito.totalGeneral = totalCarrito.totalGeneral + totalLinea + coutaLinea;
    console.log(
      `Producto: ${producto.nombre} cuesta: ${producto.valor} € la unidad y compramos: ${producto.cantidad}`
    );
  }
  return totalCarrito;
}

function calcularCuotaIva(valor, ivaNormal = 21) {
  let importe = valor * (ivaNormal / 100);
  return importe;
}

let totalCarrito = calcularTotalConIva(productos);

console.log(`TOTAL:  ${JSON.stringify(totalCarrito)} €`);

console.log("PRUEBAS");

let representacionCadena = JSON.stringify(totalCarrito);
console.log(representacionCadena);
console.log(representacionCadena.length);
console.log(representacionCadena.totalBase);
let representacionObjeto = JSON.parse(representacionCadena);
console.log(representacionObjeto);
console.log("Objeto + cadena = kk :" + representacionObjeto);
console.log(representacionObjeto.totalBase);
console.log("Primitivo como cadena va bien: " + representacionObjeto.totalBase);
