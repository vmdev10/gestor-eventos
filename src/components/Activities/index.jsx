import "./index.css";

import Carousel from "../Carousel/Carousel";
import ActivityCard from "../Cards/Activities/ActivityCard";

import categoriesData from '../../store/categories';
import { handleFormatBoxes } from '../../shareds/helpers'

import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function FindEvent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleFormatCategories = (quantity) => {
    const categoriesFormatted = handleFormatBoxes(categories, quantity)
    
    return categoriesFormatted.map((box, index) => (
      <Box className="CarouselCardsContainer" key={index}>
        {box.currenElements.map((currentCategory, index) => (
          <Link to={`/categories/${currentCategory.id}`} key={index}>
            <ActivityCard
              imageUrl={currentCategory.imageUrl}
              category={currentCategory.category}
            />
          </Link>
        ))}
      </Box>
    ))
  }

  return (
    <div className="ActivitiesContainer">
      <h3>Descubra atividades</h3>

      <div className="CarouselContainer">
        <Link to="/categories">
          <button>Ver tudo</button>
        </Link>

        <Carousel>
          {handleFormatCategories(4)}
        </Carousel>
      </div>
    </div>
  );
}

export default FindEvent;
