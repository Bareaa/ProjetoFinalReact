import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import "../../assets/css/InfoPages.css";

const People = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
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
              <p>Ano de Nascimento: {item.birth_year}</p>
              <p>Cor dos olhos: {item.eye_color}</p>
              <p>Cor do cabelo: {item.hair_color}</p>
              <p>Gênero: {item.gender}</p>
              <p>Altura: {item.height}</p>
              <p>Peso: {item.mass}</p>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default People;
