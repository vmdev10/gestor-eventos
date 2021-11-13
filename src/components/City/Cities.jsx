import "./Cities.css";

import Carousel from "../Carousel/Carousel";
import CityCard from "../Cards/Cities/CityCard";

import { Box } from "@material-ui/core";

import React from "react";

function FindEvent() {
  return (
    <div className="CitiesContainer">
      <h3>O melhor de cada cidade</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          <Box className="CarouselCardsContainer">
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
          </Box>
          <Box className="CarouselCardsContainer">
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
            <CityCard imageUrl='banner-gradient.jpg' city="São Paulo"/>
          </Box>
        </Carousel>
      </div>
    </div>
  );
}

export default FindEvent;
