import './CategoryCard.css'

import React from "react";

function CategoryCard(props) {
  return (
    <div className="CategoryImage">
      <img src={`/images/${props.imageUrl}`} alt="" />
    </div>
  )
}

export default CategoryCard