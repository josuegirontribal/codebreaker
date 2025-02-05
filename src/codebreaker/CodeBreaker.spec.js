import fs from "fs";

describe("CodeBreaker", () => {
  let numeroInput;
  let boton;
  let resultado;
  let randNumber;

  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../codebreaker/presenter");

    numeroInput = document.querySelector("#numero");
    randNumber = document.querySelector("#rand-number");
    boton = document.querySelector("#boton");
    resultado = document.querySelector("#div-resultado");
  });

  it("Ingreso un numero que no es correcto", () => {
    ingreso(4);
    intentoAdivinar();
    expect(mensajeResultante()).toEqual("No es el numero correcto");
  });

  it("Al iniciar codebreaker", () => {
    expect(mensajeResultante()).toEqual("");
  });

  it("Ingreso un numero que es correcto", () => {
    ingreso(8);
    setRandNum(8)
    intentoAdivinar();
    expect(mensajeResultante()).toEqual("Ganaste!");
  });

  it("Ingreso un numero que es correcto aleatorio", () => {
    let randNum = getRandNum(0, 9)
    ingreso(randNum);
    setRandNum(randNum)
    intentoAdivinar();
    expect(mensajeResultante()).toEqual("Ganaste!");
  });

  function ingreso(num) {
    numeroInput.value = num;
  }

  function setRandNum(num) {
    randNumber.value = num;
  }

  function intentoAdivinar() {
    boton.click();
  }

  function mensajeResultante() {
    return resultado.innerHTML;
  }

  afterEach(() => {
    resultado.innerHTML = "";
  });

  function getRandNum(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
});
