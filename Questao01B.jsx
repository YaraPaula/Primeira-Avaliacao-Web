import React from "react";

const Questao01B = () => {
  let Disciplinas = [
    "Redes de Computadores",
    "Matemática Discreta",
    "Desenvolvimento de Software para Web",
    "Estrutura de Dados",
  ];
  let Horarios = [
    "SEG 13h30:15h30 - TER 13h30:15h30",
    "SEG 15h30:17h30 - TER 15h30:17h30",
    "SEG 18h00:20h00 - TER 18h00:20h00",
    "QUA 13h30:15h30 - QUI 13h30:15h30",
  ];

  const listarHor = () => {
    return Horarios.map((Horario, index) => {
      return (
        <tr key={index}>
          <td>{Horario}</td>
        </tr>
      );
    });
  };

  const listarDis = () => {
    return Disciplinas.map((Disciplina, index) => {
      return (
        <tr key={index}>
          <td>{Disciplina}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table class="table table-light">
        <thead>
          <tr>
            <th>Disciplina</th>
          </tr>
        </thead>
        <tbody>{listarDis()}</tbody>
      </table>
    </div>
  );
};

export default Questao01B;
