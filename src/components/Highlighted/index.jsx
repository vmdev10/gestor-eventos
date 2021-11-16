import './index.css'

import HighlightedCard from "../Cards/Highlighted";
import Carousel from "../Carousel";

import { Box } from "@material-ui/core";

import React from "react";

function Highlighted() {
  return (
    <div className="HighlightedContainer">
      <h3>Em destaque no MB Eventos</h3>

      <div className="CarouselContainer">
        <a href="">
          <button>Ver tudo</button>
        </a>
        <Carousel>
          <Box className="CarouselCardsContainer">
            <HighlightedCard imageUrl="banner-gradient.jpg" />
          </Box>
          <Box className="CarouselCardsContainer">
            <HighlightedCard imageUrl="banner-gradient.jpg" />
          </Box>
        </Carousel>
      </div>
    </div>
  );
}


export default Highlighted