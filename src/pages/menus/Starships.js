import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../../assets/css/starships.css";

const Starships = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/starships")
      .then((retorno) => {
        setDados(retorno.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="starship-page">
      <Cabecalho />
      <div className="conteudo container">
        <div className="starships">
          {dados.map((item, key) => (
            <div className="starship" key={key}>
              <h1>{item.name}</h1>
              <p>Modelo: {item.model}</p>
              <p>Tripulação {item.crew}</p>
              <p>Manufatureiro: {item.manufacturer}</p>
              <p>Passageiros: {item.passengers}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starships;
