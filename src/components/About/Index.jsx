import './Index.css'


import React from "react";

function About(props) {
  return (
    <div className="AboutContainer">
      <div>
        <img src="/images/banner-gradient.jpg" alt="" />
      </div>

      <div className="AboutInformations">
        <h1>{ props.title }</h1>
        <span>{ props.address } </span>
        <p>
          { props.description }
        </p>
      </div>
    </div>
  );
}

export default About