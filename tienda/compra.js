//array de productos
let productos = [{nombre:"Libreta",valor:10,cantidad:2,exento:false}, {nombre:"Rotulador",valor:3.5,cantidad: 5,exento:false}, 
{nombre:"Boligrafo",valor:2.5, cantidad:3,exento:false}, {nombre:"Lapiz",valor:1,cantidad:1,exento:false}, {nombre:"Curso",valor:100,cantidad:2,exento:true}];

//se permite comprar entre una y diez unidades de cada
//agregar productos al carrito con su nombre, cantidad comprada y precio unitario
function llenarCarrito(productos) {
  for (let item=0; item < productos.length; item++) {
    let total = cantidad * valor;
    let total1 = total1 + total;
    return  total, total1;
 }
  total2 = llenarCarrito(productos);
  console.log ("Producto: " + productos[item].nombre + "cuesta:" + valor + " € la unidad y compramos : " + cantidad);
  console.log("TOTAL:  " + total2);


  
//Calcular la cuota de IVA
//Mostrar el importe a pagar desglosado
let importe1;
//funcion calcula cuota con iva
function calcularConIva(valor,ivaNormal=21) {
  let importe = valor * (ivaNormal/100);
    return importe;
}
console.log ("Tipo de IVA: 21 %");
importe1 = calcularConIva(productos);
console.log ("Total: " + (productos[item].valor * (1.00 + (ivaNormal/100))) + " €");
console.log("calcula cuota de IVA:  " + importe1);

if (productos[item].exento==true) {
  console.log ("Producto exento de IVA");
  console.log ("Total: " + productos[item].valor + " €");
} else {
  console.log ("Tipo de IVA: " + ivaNormal + " %");
  console.log ("Total: " + (productos[item].valor * (1.00 + (ivaNormal/100))) + " €");
  }
}