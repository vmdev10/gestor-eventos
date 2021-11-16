import BannerEvent from "../../components/BannerEvent";
import About from "../../components/About";
import Speakers from "../../components/Speakers";
import Programation from "../../components/Programation";

import React from "react";

function Event() {
  return (
    <>
      <BannerEvent />

      <About
        title="Quem somos"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Speakers />
      <Programation />
      <About
        title="O Local"
        address="Av. Bernardino de Campos, 98 São Paulo - SP - CEP: 12345-678"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </>
  );
}

export default Event;
