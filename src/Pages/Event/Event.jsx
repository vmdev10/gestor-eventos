import "./Event.css";

import BannerEvent from "../../components/BannerEvent/Index";
import About from "../../components/About/Index";
import Speakers from "../../components/Speakers/Index";
import Programation from "../../components/Programation/Index";

import React from "react";

function Event() {
  return (
    <>
      <BannerEvent />

      <About />
      <Speakers />
      <Programation />
     

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
