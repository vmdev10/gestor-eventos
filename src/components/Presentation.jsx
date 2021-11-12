import "./Presentation.css";

import React from "react";

function Presentation() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <div className="Presentation">
          <h1 className="Title">MB</h1>
          <h1 className="Title">EVENTOS</h1>

          <span className="Slogan">
            Conectando você com os acontecimentos do mundo
          </span>

          <a href="" className="Event">
            <button>Participe de um evento</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
