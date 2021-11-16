import './index.css'

import CarouselMUI from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import React from 'react';

function Carousel(props) {
  return (
    <CarouselMUI
      className="Carousel"
      autoPlay={props.autoPlay || true }
      interval={props.autoPlay || 4000 }
      animation={props.autoPlay || 'slide'}
      navButtonsAlwaysVisible={ props.navButtonsAlwaysVisible || false }
      NextIcon={ <ArrowForwardIosIcon/> }
      PrevIcon={ <ArrowBackIosIcon/> }
      indicators={ true }
      fullHeightHover={ false }
    >
      {
        props.children
      }
    </CarouselMUI>
  );
}

export default Carousel