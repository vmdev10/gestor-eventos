import "./Home.css";

import Presentation from '../components/Presentation/Presentation'
import Activities from "../components/Activities";
import Cities from "../components/City"
import Highlighted from "../components/Highlighted"
import Events from "../components/Events"

import React from "react";

function Home() {
  return (
    <div className="Home">
      <Presentation />

      <Activities />
      <Cities />

      <Highlighted />

      <Events event='Cursos'/>
      <Events event='Workshops'/>
      <Events event='Palestras'/>
      <Events event='Reuniões'/>
    </div>
  );
}

export default Home;
