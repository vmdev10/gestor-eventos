import "./Category.css";

import Event from '../../components/Events/Events'

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Category() {
  return (
    <>
      <div className="CategoryContainer">
        <div className="Category">
          <Breadcrumbs className="Breadcumbs" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              Categorias
            </Link>
            <Typography color="textPrimary">Categoria</Typography>
          </Breadcrumbs>

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
