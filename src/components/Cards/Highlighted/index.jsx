import "./index.css";

import React from "react";

function HighlightedCard(props) {
  return (
    <div className="HighlightedCard">
      <div className="CardImage">
        <img src={`/images/${props.imageUrl}`} alt="" />
      </div>

      <div className="Informations">
        <span>
          <strong>QUA, 10 NOV - 17:00</strong>
        </span>
        <h3>10 Soft Skills You Need 1 Day Training in Campinas</h3>

        <p>Regus, South West, 421 7 Ave SE 30th Floor Calgary, AB, Canadá</p>

        <a href="">
          <button>Ver detalhes</button>
        </a>
      </div>
    </div>
  );
}

export default HighlightedCard;
