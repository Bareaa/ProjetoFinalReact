import React from "react";
import "../../assets/css/sobre.css";
import fernando from "../../assets/images/fernando.jpg";
import guilherme from '../../assets/images/guilherme.jpg';
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';

const Sobre = () => {
  return (
    <div className="conteudoAll">
      <Cabecalho />
      <div className="sobre">
      <div className="buttons">
          <h3>
            Site Star Wars <br/>
            Trabalho final da disciplina de <b>Tópicos Especiais em Programação</b>.
            <br/> Desenvolvido por:
          </h3>
        </div>
        <h1>Fernando</h1>
        <img className="devs" src={fernando}></img>
        <div className="links">
            <a href="https://www.linkedin.com/in/fernando-rodrigues-junior-020188204/">
              <img className="button" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/frodrigues404">
              <img className="button" src={github} alt="" />
            </a>
        </div>
        <h1>Guilherme</h1>
        <img className="devs" src={guilherme}></img>
        <div className="links">
            <a href="https://www.linkedin.com/in/guilherme-barea-3891a5185/">
              <img className="button" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/Bareaa">
              <img className="button" src={github} alt="" />
            </a>
        </div>
      </div>
      <Rodape/>
    </div>
  );
};

export default Sobre;
