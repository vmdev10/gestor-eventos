import "./Event.css";

import BannerEvent from "../../components/BannerEvent/Index";
import About from "../../components/About/Index";
import Speakers from "../../components/Speakers/Index";

import React from "react";

function Event() {
  return (
    <>
      <BannerEvent />

      <About />
      <Speakers />

      <div className="Programation">
        <h1>Programação</h1>

        <div className="ProgramationContainer">
          <div>
            <h1>
              <strong>9:00</strong>
            </h1>
            <span className="Speaker">VINÍCUIS MARTINS:</span>
            <span>Conteúdo é o Rei. Design é a Rainha</span>
          </div>
          <div>
            <h1>
              <strong>9:00</strong>
            </h1>
            <span className="Speaker">VINÍCUIS MARTINS:</span>
            <span>Conteúdo é o Rei. Design é a Rainha</span>
          </div>
          <div>
            <h1>
              <strong>9:00</strong>
            </h1>
            <span className="Speaker">VINÍCUIS MARTINS:</span>
            <span>Conteúdo é o Rei. Design é a Rainha</span>
          </div>
          <div>
            <h1>
              <strong>9:00</strong>
            </h1>
            <span className="Speaker">VINÍCUIS MARTINS:</span>
            <span>Conteúdo é o Rei. Design é a Rainha</span>
          </div>
        </div>
      </div>

      <div className="Location">
        <div>
          <img src="/images/banner-gradient.jpg" alt="" />
        </div>

        <div className="LocationAddress">
          <h1>O Local</h1>

          <span>
            Av. Bernardino de Campos, 98 São Paulo - SP - CEP: 12345-678
          </span>

          <p>
            SOBRE O LOCAL Sou um parágrafo. Clique aqui para editar e adicionar
            o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou
            clicar duas vezes sobre mim e você poderá adicionar o seu próprio
            conteúdo e trocar fontes.
          </p>
        </div>
      </div>
    </>
  );
}

export default Event;
