import "./Home.css";
import Navbar from "../Navbar"

import React from "react";

function Home() {
  return (
    <div className="Home">
      <Navbar />

      <div className="BannerContainer">
        <div className="Banner">
          <div>Banner</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
