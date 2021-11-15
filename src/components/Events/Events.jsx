  import "./Events.css";

import Carousel from "../Carousel/Carousel";
import EventCard from "../Cards/Event/EventCard";

import { Box } from "@material-ui/core";

import React, { useState, useEffect } from "react";

const eventsData = [
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
  {
    id: 1,
    lat: 0,
    lng: 0,
    name: 'Some name',
    description: 'Some Description',
    address: 'Santa Helena, 370, Picos, Piauí, Brasil',
    eventDate: 'QUA, 10 NOV - 17:00',
    categorieId: 1,
    imageUrl: 'banner-gradient.jpg'
  },
];

function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, [])

  const handleFormatBoxes = (allElements, quantityElementsPerBox) => {
    const boxes = [];

    const quantityBox = allElements.length / quantityElementsPerBox;
    
    for (let index = 0; index < quantityBox; index++) {

      const initialElementIndex = index * quantityElementsPerBox;
      const endElementIndex = initialElementIndex + quantityElementsPerBox
      const currenElements = allElements.slice(initialElementIndex, endElementIndex);

      boxes.push({
        currenElements
      })
    }

    return boxes;    
  }

  return (
    <div className="EventsContainer">
      <h3> { props.event }</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        {/* {
          console.log(handleFormatBoxes(events, 4))
        } */}
       
       <div className="CarouselMobile">
        <Carousel>
            {
              handleFormatBoxes(events, 2).map((box) => (
                <Box className="CarouselCardsContainer">
                  {
                    box.currenElements.map((eventCard) => (
                      <EventCard imageUrl={eventCard.imageUrl} eventDate={eventCard.eventDate} name={eventCard.name} address={eventCard.address}/>
                    ))
                  }
                </Box>
              ))
            }
        </Carousel>
       </div>
       <div className="CarouselDesktop">
        <Carousel>
            <Box className="CarouselCardsContainer">
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
            </Box>
            <Box className="CarouselCardsContainer">
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
            </Box>
          </Carousel>
       </div>
      </div>
    </div>
  );
}

export default Events;
