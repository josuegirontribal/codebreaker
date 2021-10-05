const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  const resultado = document.querySelector("#div-resultado");
  const userNum = document.querySelector("#numero");

  let userNumInt = parseInt(userNum.value)

  if ( userNumInt === 8) {
    resultado.innerHTML = "Ganaste!";
    return
  }
  resultado.innerHTML = "No es el numero correcto";
});
