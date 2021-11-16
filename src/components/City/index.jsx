import "./index.css";

import Carousel from "../Carousel";
import CityCard from "../Cards/Cities";

import citiesData from '../../store/cities';
import { handleFormatBoxes } from '../../shareds/helpers'

import { Box } from "@material-ui/core";

import React, { useState, useEffect } from "react";

function FindCity() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(citiesData);
  }, []);

  const handleFormatCities = (quantity) => {
    const citiesFormatted = handleFormatBoxes(cities, quantity)
    
    return citiesFormatted.map((box, index) => (
      <Box key={index} className="CarouselCardsContainer">
        {box.currenElements.map((currentCity, index) => (
          <CityCard
            key={index}
            imageUrl={currentCity.imageUrl}
            city={currentCity.city}
          />
        ))}
      </Box>
    ))
  }

  return (
    <div className="CitiesContainer">
      <h3>O melhor de cada cidade</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          {handleFormatCities(4)}
        </Carousel>
      </div>
    </div>
  );
}

export default FindCity;
