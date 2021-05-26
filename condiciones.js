let saldo = 900;
let precio = 1800;
let canBuy = saldo > precio;
let creditoDisponible = 2000;
//let puedoComprar = saldo > precio;
//la variavle puedo comprar tiene valor cierto o faldo
//se puede hacer el if de cualquier forma
//if (puedoComprar == true) {
  if (saldo > precio) {  
console.log("me lo compro");
} else {
console.log("me aguanto");
}

if (canBuy) {
  console.log("que me lo voy a comprar"); 
} else {
  console.log("pues va a ser que no me lo compro pq tengo: " + saldo);
  console.log("y cuesta: " + precio);
  let necesito = precio - saldo;
  console.log("necesito: " + necesito);
 //esto es otra forma de hacer el if 
  necesito > creditoDisponible
  ? console.log("no puedo pedir credito")
  : console.log("si puedo pedir credito")
}

let formaDePago = "Tarjeta";
switch (formaDePago){
  case "Tarjeta":
    console.log("pagare con tarjeta")
    break;
  case "Bizum":
    console.log("pagare con bizum") 
    break;
}