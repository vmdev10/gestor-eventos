import "./Category.css";

import Carousel from "../../components/Carousel/Carousel";
import EventCard from "../../components/Cards/Event/EventCard";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Category() {
  return (
    <>
      <div className="CategoryContainer">
        <div className="Category">
          <Breadcrumbs className="Breadcumbs" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              Categorias
            </Link>
            <Typography color="textPrimary">Categoria</Typography>
          </Breadcrumbs>

          <div className="CategoryPresentation">
            <h3>Categoria</h3>
            <p>
              Seja para se capacitar profissionalmente ou pelo simples prazer de
              aprender algo novo: escolha um curso ou workshop e fortaleça seu
              currículo!
            </p>
          </div>
        </div>
      </div>

      <div className="CategoryEvents">
          <div className="CarouselMobile">
            <Carousel>
              <Box className="CarouselCardsContainer">
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
              </Box>
              <Box className="CarouselCardsContainer">
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
              </Box>
            </Carousel>
          </div>
          <div className="CarouselDesktop">
            <Carousel>
              <Box className="CarouselCardsContainer">
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
              </Box>
              <Box className="CarouselCardsContainer">
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
                <EventCard imageUrl="banner-gradient.jpg" />
              </Box>
            </Carousel>
          </div>
        </div>
    </>
  );
}

export default Category;
