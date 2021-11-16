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
      interval={props.interval || 3000 }
      animation={props.animation || 'slide'}
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