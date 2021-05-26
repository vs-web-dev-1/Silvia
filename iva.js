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

