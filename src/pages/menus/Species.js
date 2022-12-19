import React from "react";
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../../assets/css/InfoPages.css";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
const Species = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/species")
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
              <p>Altura media: {item.average_height} cm</p>
              <p>Tempo de vida Medio: {item.average_lifespan} anos</p>
              <p>Linguas: {item.language}</p>
              <p>Classificação: {item.classification}</p>
            </div>
          ))}
        </div>
      </div>
      <Rodape/>
    </div>
  );
};

export default Species;
