const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  const resultado = document.querySelector("#div-resultado");
  resultado.innerHTML = "No es el numero correcto";
});
