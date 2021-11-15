import "./Activities.css";

import Carousel from "../Carousel/Carousel";
import ActivityCard from "../Cards/Activities/ActivityCard";

import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function FindEvent() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes([
      {
        categories: [
          {
            category: "Cursos",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "Workshops",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "Black friday",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "Teatros",
            imageUrl: "banner-gradient.jpg",
          },
        ],
      },
      {
        categories: [
          {
            category: "Finanças",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "História",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "Matemática",
            imageUrl: "banner-gradient.jpg",
          },
          {
            category: "Tecnologia",
            imageUrl: "banner-gradient.jpg",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="ActivitiesContainer">
      <h3>Descubra atividades</h3>

      <div className="CarouselContainer">
        <Link to="/categories">
          <button>Ver tudo</button>
        </Link>

        <Carousel>
          {boxes.map((box, index) => (
            <Box className="CarouselCardsContainer" key={index}>
              {box.categories.map((currentCategory, index) => (
                <Link to={`/categories/${currentCategory.category}`} key={index}>
                  <ActivityCard
                    imageUrl={currentCategory.imageUrl}
                    category={currentCategory.category}
                  />
                </Link>
              ))}
            </Box>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FindEvent;
