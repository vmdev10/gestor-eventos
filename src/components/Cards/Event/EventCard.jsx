import "./EventCard.css";

import { Link } from "react-router-dom";

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

        <Link to={ `/event/${ props.id }` }>
          <button>Ver detalhes</button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
