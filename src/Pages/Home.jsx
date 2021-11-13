import "./Home.css";
import Navbar from "../components/Navbar/Navbar"
import Presentation from '../components/Presentation/Presentation'
import Activities from "../components/Activities/Activities";
import Cities from "../components/City/Cities"
import Highlighted from "../components/Highlighted/Highlighted"

import React from "react";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Presentation />

      <Activities />
      <Cities />

      <Highlighted />
    </div>
  );
}

export default Home;
