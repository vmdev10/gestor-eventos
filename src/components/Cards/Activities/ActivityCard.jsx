import './ActivityCard.css'

import React from "react";

function ActivitiesCard(props) {
  return (
    <div className="ActivityImage">
      <img src={`/images/${props.imageUrl}`} alt="" />
    
      <div className="Activity">
          <span>{ props.category }</span>
      </div>
    </div>
  )
}

export default ActivitiesCard