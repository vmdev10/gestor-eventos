import "./Event.css";

import BannerEvent from "../../components/BannerEvent/Index";
import About from "../../components/About/Index";
import Speakers from "../../components/Speakers";
import Programation from "../../components/Programation/Index";

import React from "react";

function Event() {
  return (
    <>
      <BannerEvent />

      <About />
      <Speakers />
      <Programation />
      <About />
    </>
  );
}

export default Event;
