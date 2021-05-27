//primero valor de inicio de una instrucion
//segundo condición de parada; condicion de hacer hasta 6
//tercera condición vamos a incrementar
//for (let huevos = 1  ; huevos <= 6 ; huevos = huevos ++){
//  console.log('huevo: ' + huevos);
//  console.log('vaciar');
//  console.log('romper');
//}
//esto es otra forma con el while
//let huevos = 6;
//while (huevos>0) {
//  console.log('huevo nº: ' + huevos);
//  console.log('vaciar');
//  console.log('romper');
//  huevos = huevos - 1;
//}

//let sabores =  ["cebolla" ,"tomate", "chorizo", "gulas"];
//console.log(sabores[0]);
//console.log(sabores[5]);
//sabores.push("queso");
//console.log(sabores);
//console.log(sabores.length);

//for(let i = 0; i < sabores.length; i++){
//  console.log(sabores[i]);
//}

//let i = 0;
//while () {
//  console.log(sabores[i]);
//}

let sabores =  ["cebolla" ,"tomate", "chorizo", "gulas"];

for (let i = 0; i < sabores.length; i++ ) {
  console.log(`FOR: En la posicion ${i}tenemos ${sabores[i]}`) 
}
let i = 0;
while (i < sabores.length) {
  console.log(`WHILE: En la posicion ${i}tenemos ${sabores[i]}`) 
  i++;
}


function sumar(a,b) {
  return a + b;
}
sumar(2, 3);
let agregar = function (a,b){
  return a + b;
}
agregar(2, 3);
let añadir = (a, b) => a + b;
añadir(2, 3);

sabores.forEach((sabor) => console.log(`FOR_EACH: ${sabor}`));