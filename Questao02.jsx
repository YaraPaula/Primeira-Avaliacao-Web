import React, { useState } from "react";

function Calculadora() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operation, setOperation] = useState("");

  function resultado() {
    if (operation == "Somar") return x + y;
    if (operation == "Diminuir") return x - y;
    if (operation == "Multiplicar") return x * y;
    if (operation == "Dividir") return x / y;
  }
  return (
    <div>
      <input
        style={{ backgroundColor: "#99CCFF", marginTop: "40px" }}
        type="text"
        placeholder="Digite um inteiro"
        onChange={(event) => {
          setX(parseInt(event.target.value));
        }}
      />
      &emsp;&emsp;&emsp;
      <input
        style={{ backgroundColor: "#99CCFF" }}
        type="text"
        placeholder="Digite um inteiro"
        onChange={(event) => {
          setY(parseInt(event.target.value));
        }}
      />
      <br />
      <br />
      <button
        style={{ backgroundColor: "#99CCFF", borderRadius: "5px" }}
        value="Somar"
        onClick={(event) => {
          setOperation("Somar");
        }}
      >
        +
      </button>
      &emsp;
      <button
        style={{ backgroundColor: "#99CCFF", borderRadius: "5px" }}
        value="Diminuir"
        onClick={(event) => {
          setOperation("Diminuir");
        }}
      >
        -
      </button>
      &emsp;
      <button
        style={{ backgroundColor: "#99CCFF", borderRadius: "5px" }}
        value="Multiplicar"
        onClick={(event) => {
          setOperation("Multiplicar");
        }}
      >
        *
      </button>
      &emsp;
      <button
        style={{ backgroundColor: "#99CCFF", borderRadius: "5px" }}
        value="Dividir"
        onClick={(event) => {
          setOperation("Dividir");
        }}
      >
        /
      </button>
      <br />
      <br />
      Resultado: {resultado()}
    </div>
  );
}

export default Calculadora;
