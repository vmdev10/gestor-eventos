import "./EventCard.css";

import React from "react";

function EventCard(props) {
  return (
    <div className="EventCard">
      <div className="CardImage">
        <img src={`/images/${props.imageUrl}`} alt="" />
      </div>

      <div className="Informations">
        <span>
          <strong>{ props.eventDate }</strong>
        </span>
        <h3>{ props.name }</h3>

        <p>{ props.address }</p>

        <a href="">
          <button>Ver detalhes</button>
        </a>
      </div>
    </div>
  );
}

export default EventCard;
