import "./Category.css";

import Breadcrumb from "../../components/Breadcrumbs/Index";
import Event from '../../components/Events/Events'

import React from "react";

function Category() {
  return (
    <>
      <div className="CategoryContainer">
        <div className="Category">

          <Breadcrumb />
          
          <div className="CategoryPresentation">
            <h3>Categoria</h3>
            <p>
              Seja para se capacitar profissionalmente ou pelo simples prazer de
              aprender algo novo: escolha um curso ou workshop e fortaleça seu
              currículo!
            </p>
          </div>
        </div>
      </div>

      <Event event='Eventos online em alta'/>
      <Event event='Começa em breve'/>
      <Event event='Tecnologia'/>
    </>
  );
}

export default Category;
