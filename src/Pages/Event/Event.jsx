import "./Event.css";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Event() {
  return (
    <>
      <div className="EventContainer">
        <div className="Event">
          <div>
            <p>Fique à Frente da Indústria</p>
            <h1>Conferência NWS 2023</h1>
          </div>

          <div className="Address">
            <p>
              24 de nov. de 2023 19:00 – 25 de nov. de 2023 23:00 Av. Bernardino
              de Campos, 98 - Paraíso, São Paulo
            </p>
            <a>
              <button>Comprar ingressos</button>
            </a>
          </div>
        </div>
      </div>
      <div className="About">
        <div>
          <img src="/images/banner-gradient.jpg" alt="" />
        </div>

        <div className="AboutInformations">
          <h1>Quem Somos</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="Speakers">
        <h1>Palestrantes</h1>

        <div className="AboutSpeakers">
          <div>
            <img src="/images/banner-gradient.jpg" alt="" />
          </div>

          <div className="AboutInformations">
            <h1>Alice Mendes</h1>
            <span>Analista de dados</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="AboutSpeakers">
          <div>
            <img src="/images/banner-gradient.jpg" alt="" />
          </div>

          <div className="AboutInformations">
            <h1>Alice Mendes</h1>
            <span>Analista de dados</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="AboutSpeakers">
          <div>
            <img src="/images/banner-gradient.jpg" alt="" />
          </div>

          <div className="AboutInformations">
            <h1>Alice Mendes</h1>
            <span>Analista de dados</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

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
