import "./Cities.css";

import Carousel from "../Carousel/Carousel";
import CityCard from "../Cards/Cities/CityCard";

import { Box } from "@material-ui/core";

import React, { useState, useEffect } from "react";

function FindCity() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes([
      {
        cities: [
          {
            city: "São Paulo",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Rio de Janeiro",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Belo Horizonte",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Porto Alegre",
            imageUrl: "banner-gradient.jpg",
          },
        ]
      },
      {
        cities: [
          {
            city: "Brasília",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Salvador",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Curitiba",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Recife",
            imageUrl: "banner-gradient.jpg",
          },
        ],
      },
      {
        cities: [
          {
            city: "Florianópolis",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Fortaleza",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Teresina",
            imageUrl: "banner-gradient.jpg",
          },
          {
            city: "Campinas",
            imageUrl: "banner-gradient.jpg",
          },
        ],
      }
    ]);
  }, []);

  return (
    <div className="CitiesContainer">
      <h3>O melhor de cada cidade</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          {boxes.map((box, index) => (
            <Box key={index} className="CarouselCardsContainer">
              {box.cities.map((currentCity, index) => (
                <CityCard
                  key={index}
                  imageUrl={currentCity.imageUrl}
                  city={currentCity.city}
                />
              ))}
            </Box>
          ))}
          {/* <Box className="CarouselCardsContainer">
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
          </Box> */}
        </Carousel>
      </div>
    </div>
  );
}

export default FindCity;
