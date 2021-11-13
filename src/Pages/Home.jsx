import "./Home.css";
import Navbar from "../components/Navbar/Navbar"
import Presentation from '../components/Presentation/Presentation'
import FindEvent from "../components/Categories/FindEvent";

import React from "react";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Presentation />

      <FindEvent />
    </div>
  );
}

export default Home;
