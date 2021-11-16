import './index.css'

import React from "react";

function CityCard(props) {
  return (
    <div className="CityImage">
      <img src={`/images/${props.imageUrl}`} alt="" />
    
      <div className="City">
          <span>{ props.city }</span>
      </div>
    </div>
  )
}

export default CityCard