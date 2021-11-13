import "./Events.css";

import Carousel from "../Carousel/Carousel";
import EventCard from "../Cards/Event/EventCard";

import { Box } from "@material-ui/core";

import React from "react";

function Events(props) {
  return (
    <div className="EventsContainer">
      <h3> { props.event }</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
       
       <div className="CarouselMobile">
        <Carousel>
            <Box className="CarouselCardsContainer">
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
            </Box>
            <Box className="CarouselCardsContainer">
              <EventCard imageUrl='banner-gradient.jpg'/>
              <EventCard imageUrl='banner-gradient.jpg'/>
            </Box>
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
