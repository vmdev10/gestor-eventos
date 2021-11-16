import "./index.css";

import Carousel from "../Carousel";
import EventCard from "../Cards/Event";

import { Box } from "@material-ui/core";

import React, { useState, useEffect } from "react";

import eventsData from '../../store/events';
import { handleFormatBoxes } from '../../shareds/helpers'

function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const categoryId = props.categoryId;
    if(!categoryId) {
      setEvents(eventsData);
    } else {
      const eventsByCategory = eventsData
        .filter((event) => event.categoryId === parseInt(categoryId));
      setEvents(eventsByCategory);
    }
  }, [props.categoryId]);

  const handleFormatEvents = (quantity) => {
    const eventsFormatted = handleFormatBoxes(events, quantity)
    
    return eventsFormatted.map((box, index) => (
      <Box key={index} className="CarouselCardsContainer">
        {box.currenElements.map((eventCard, index) => (
          <EventCard
            key={index}
            imageUrl={eventCard.imageUrl}
            eventDate={eventCard.eventDate}
            name={eventCard.name}
            address={eventCard.address}
            id={eventCard.id}
          />
        ))}
      </Box>
    ))
  }

  return (
    <div className="EventsContainer">
      <h3> {props.event}</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>

        <div className="CarouselMobile">
          <Carousel>
            {handleFormatEvents(2)}
          </Carousel>
        </div>
        <div className="CarouselDesktop">
          <Carousel>
            {handleFormatEvents(4)}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
