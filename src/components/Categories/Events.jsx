import "./Events.css";

import Carousel from "../Carousel/Carousel";
import CategoryCard from "../Cards/Categories/CategoryCard";

import { Box } from "@material-ui/core";

import React from "react";

function FindEvent() {
  return (
    <div className="CategoriesContainer">
      <h3>Descubra atividades</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          <Box className="CarouselCardsContainer">
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
          </Box>
          <Box className="CarouselCardsContainer">
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
            <CategoryCard imageUrl='banner-gradient.jpg' category="Cursos"/>
          </Box>
        </Carousel>
      </div>
    </div>
  );
}

export default FindEvent;
