const frase = "en un lugar de la mancha";
let inicio = Date.now();
let haTerminado = false;

const nodoMensaje = document.getElementById("mensaje");
const nodoFrase = document.getElementById("frase");
const botonEmpezar = document.getElementById("empezar");
const inputLoTecleado = document.getElementById("lo-tecleado");

nodoMensaje.innerText = "";
nodoFrase.innerText = frase;

botonEmpezar.addEventListener("click", () => {
  inputLoTecleado.classList.remove("mal");
  inputLoTecleado.value = "";
  inicio = Date.now();
  haTerminado = false;
});
inputLoTecleado.addEventListener("input", () => {
  if (haTerminado) return;
  const ahora = Date.now();
  let tiempo = (ahora - inicio) / 1000;
  const loTecleado = inputLoTecleado.value;
  if (loTecleado === frase) {
    nodoMensaje.innerText = "Felicidades β¨πππ has tardado " + tiempo;
    haTerminado = true;
  } else {
    if (frase.startsWith(loTecleado)) {
      inputLoTecleado.classList.remove("mal");
      nodoMensaje.innerText = "aΓΊn no estΓ‘ completa βππ±βπ llevas " + tiempo;
    } else {
      inputLoTecleado.classList.add("mal");
      nodoMensaje.innerText = "vas mal βπ±βππ£π₯ llevas " + tiempo;
    }
  }
});