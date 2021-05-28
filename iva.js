//let ivaNormal = 21;
let precio = 50;
let importe1;
let import2;
let total1;

//funcion calcula cuota con iva
function calcularConIva(precio,ivaNormal=21) {
  let importe = precio * (ivaNormal/100);
  import2 = importe * (ivaNormal/100);
  return importe;
}

importe1 = calcularConIva(precio);
console.log("calcula cuota de iva:  " + importe1);

function calcularTotalIva (precio,ivaNormal=21) {
  let total = precio + (precio * ivaNormal/100);
  return  total;
}

total1 = calcularTotalIva(precio,ivaNormal=21);
console.log("calcula cuota total:  " + total1);
console.log("calcula importe2:  " + import2);
console.log("calcula ivaNormal total:  " + ivaNormal);


//array de productos
let productos = [{nombre:"Libreta",valor:2,exento:false}, {nombre:"Curso",valor:300,exento:true}, {nombre:"Rotulador",valor:1,exento:false}];

for (let item=0; item < productos.length; item++) {
    console.log ("Producto: " + productos[item].nombre);
    console.log ("Valor: " + productos[item].valor + " €");
    if (productos[item].exento==true) {
        console.log ("Producto exento de IVA");
        console.log ("Total: " + productos[item].valor + " €");
    } else {
        console.log ("Tipo de IVA: " + ivaNormal + " %");
        console.log ("Total: " + (productos[item].valor * (1.00 + (ivaNormal/100))) + " €");
    }
} 

