import "./Events.css";

import Carousel from "../Carousel/Carousel";
import EventCard from "../Cards/Event/EventCard";

import { Box } from "@material-ui/core";

import React, { useState, useEffect } from "react";

import eventsData from '../../store/events';

function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleFormatBoxes = (allElements, quantityElementsPerBox) => {
    const boxes = [];

    const quantityBox = allElements.length / quantityElementsPerBox;

    for (let index = 0; index < quantityBox; index++) {
      const initialElementIndex = index * quantityElementsPerBox;
      const endElementIndex = initialElementIndex + quantityElementsPerBox;
      const currenElements = allElements.slice(
        initialElementIndex,
        endElementIndex
      );

      boxes.push({
        currenElements,
      });
    }

    return boxes;
  };

  return (
    <div className="EventsContainer">
      <h3> {props.event}</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>

        <div className="CarouselMobile">
          <Carousel>
            {handleFormatBoxes(events, 2).map((box, index) => (
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
            ))}
          </Carousel>
        </div>
        <div className="CarouselDesktop">
          <Carousel>
            {handleFormatBoxes(events, 4).map((box, index) => (
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
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
