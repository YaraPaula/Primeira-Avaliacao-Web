import axios from "axios";
import { useEffect, useState } from "react";

const Pais = () => {
  const [paises, setPaises] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/region/africa?fields=name,population")
      .then((response) => {
        setPaises(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Populacao = () => {
    let P = 0;
    let pays = "";
    paises.forEach((country) => {
      if (country.population > P) {
        P = country.population;
        pays = country.name;
      }
    });
    return pays;
  };
  return (
    <div>
      <h2>O país mais populoso da África é:</h2>
      <h3>{Populacao()}</h3>
    </div>
  );
};

export default Pais;
