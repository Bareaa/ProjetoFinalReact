import axios from "axios";
import "../../assets/css/InfoPages.css";
import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import { useState, useLayoutEffect } from "react";


const Planets = () => {
  const [dados, setDados] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://swapi.dev/api/planets")
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
              <p>Clima: {item.climate}</p>
              <p>Terreno: {item.terrain}</p>
              <p>Gravidade: {item.gravity}</p>
              <p>Duração do Dia: {item.rotation_period} horas</p>
              <p>Duração do Ano: {item.orbital_period} dias</p>
              <p>População: {item.population}</p>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Planets;
