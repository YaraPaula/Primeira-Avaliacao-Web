import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);
  const [n, setN] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const Table = () => {
    return pokemon.map((pokemons, number) => {
      pokemons.key = number;
      return (
        <tr>
          <td>{n + number}</td>
          <td>{pokemons.name}</td>
          <td>{pokemons.url}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nomes</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{Table()}</tbody>
      </table>
      <button
        class="btn btn-dark"
        onClick={(event) => {
          setId(id + 10);
          setN(n + 10);
        }}
      >
        + 10
      </button>
    </div>
  );
};

export default Pokemon;
