const PI = 3.14;
let radio = 5;
let circunferencia = calcularCircunferencia(radio);
saludar();
function saludar() {
   console.log("Hola mundo");
}
saludarPorNombre("Silvia");
function saludarPorNombre(nombre) {
  console.log("Hola" + nombre)
  console.log('nombre :' + nombre);
}

function calcularCircunferencia(radio) {
  return 2 * PI * radio;
}
console.log(circunferencia);

