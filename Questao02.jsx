import { useState } from "react";

function Calculadora() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operation, setOperation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const calc = { x, y, operation }
      .then((response) => {
        console.log(response.data.id);
      })
      .catch((error) => console.log(error));
  };

  function resultado() {
    if (operation == "Somar") return parseInt(x) + parseInt(y);
    if (operation == "Diminuir") return parseInt(x) - parseInt(y);
    if (operation == "Multiplicar") return parseInt(x) * parseInt(y);
    if (operation == "Dividir") return parseInt(x) / parseInt(y);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Digite um inteiro"
          onChange={(event) => {
            setX(event.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Digite um inteiro"
          onChange={(event) => {
            setY(event.target.value);
          }}
        />
        <button
          value="Somar"
          onClick={(event) => {
            setOperation("Somar");
          }}
        >
          +
        </button>
        <button
          value="Diminuir"
          onClick={(event) => {
            setOperation("Diminuir");
          }}
        >
          -
        </button>
        <button
          value="Multiplicar"
          onClick={(event) => {
            setOperation("Multiplicar");
          }}
        >
          *
        </button>
        <button
          value="Dividir"
          onClick={(event) => {
            setOperation("Dividir");
          }}
        >
          /
        </button>
        <br />
        Resultado: {resultado()}
      </form>
    </div>
  );
}

export default Calculadora;
