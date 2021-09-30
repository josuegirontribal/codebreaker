const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import fs from "fs";

describe("CodeBreaker", () => {
  let numeroInput;
  let boton;
  let resultado;

  beforeAll(() => {
    const html = fs.readFileSync("codebreaker.html", "utf8").toString();
    const dom = new JSDOM(html, {
      resources: "usable",
      runScripts: "dangerously",
    });
    console.log(dom.serialize());

    document.body.innerHTML = dom.serialize();
    require("../codebreaker/presenter");

    // document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");

    numeroInput = document.querySelector("#numero");
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

  function ingreso(num) {
    numeroInput.value = num;
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
});
