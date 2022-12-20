import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../../assets/css/InfoPages.css";

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
    <div className="conteudoAll">
      <Cabecalho />
      <div>
        <div className="content">
          {dados.map((item, key) => (
            <div className="contents" key={key}>
              <h1>{item.name}</h1>
              <p>Modelo: {item.model}</p>
              <p>Tripulação {item.crew}</p>
              <p>Manufatureiro: {item.manufacturer}</p>
              <p>Passageiros: {item.passengers}</p>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Starships;
