import './CategoryCard.css'

import React from "react";

function CategoryCard(props) {
  return (
    <div className="CategoryImage">
      <img src={`/images/${props.imageUrl}`} alt="" />
    
      <div className="Category">
          <span>{ props.category }</span>
      </div>
    </div>
  )
}

export default CategoryCard