import "./Activities.css";

import Carousel from "../Carousel/Carousel";
import ActivityCard from "../Cards/Activities/ActivityCard";

import { Box } from "@material-ui/core";

import React from "react";

function FindEvent() {
  return (
    <div className="ActivitiesContainer">
      <h3>Descubra atividades</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          <Box className="CarouselCardsContainer">
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
          </Box>
          <Box className="CarouselCardsContainer">
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <ActivityCard imageUrl='banner-gradient.jpg' category="Cursos"/>
          </Box>
        </Carousel>
      </div>
    </div>
  );
}

export default FindEvent;
