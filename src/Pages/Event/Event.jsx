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
        <h3>Palestrantes</h3>

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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Event;
