const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {

  const resultado = document.querySelector("#div-resultado");
  const randNum = document.querySelector("#rand-number");
  const userNum = document.querySelector("#numero");

  let randNumInt = parseInt(randNum.value)

  if (randNum.value === ""){
    randNumInt = getRandNum(0, 9)
  }

  let userNumInt = parseInt(userNum.value)
  

  if ( userNumInt === randNumInt) {
    resultado.innerHTML = "Ganaste!";
    return
  }
  resultado.innerHTML = "No es el numero correcto";
});

function getRandNum(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}