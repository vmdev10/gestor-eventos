import "./Home.css";
import Navbar from "../Navbar"
import Presentation from '../Presentation'

import React from "react";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Presentation />
    </div>
  );
}

export default Home;
