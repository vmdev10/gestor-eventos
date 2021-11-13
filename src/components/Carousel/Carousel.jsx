import './Carousel.css'

import CarouselMUI from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import React from 'react';

function Carousel(props) {
  return (
    <CarouselMUI
      className="Carousel"
      autoPlay={props.autoPlay || false}
      interval={props.autoPlay || 3000} 
      animation={props.autoPlay || 'slide'}
      navButtonsAlwaysVisible={ props.navButtonsAlwaysVisible || true }
      NextIcon={ <ArrowForwardIosIcon/> }
      PrevIcon={ <ArrowBackIosIcon/> }
      cycleNavigation={false}
    >
      {
        props.children
      }
    </CarouselMUI>
  );
}

export default Carousel