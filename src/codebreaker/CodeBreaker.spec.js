import fs from "fs";

describe("CodeBreaker", () => {
  let numeroInput;
  let boton;
  let resultado;

  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    numeroInput = document.querySelector("#numero");
    boton = document.querySelector("#boton");
    resultado = document.querySelector("#div-resultado");

    require("../codebreaker/presenter");
  });

  it("Al iniciar codebreaker", () => {
    expect(mensajeResultante()).toEqual("");
  });

  it("Ingreso un numero que no es correcto", () => {
    ingreso(4);
    intentoAdivinar();
    expect(mensajeResultante()).toEqual("No es el numero correcto");
  });

  function ingreso(num) {
    numeroInput.value = num;
  }

  function intentoAdivinar() {
    boton.click();
  }

  function mensajeResultante() {
    return resultado.innerHTML;
  }
});
