import './Index.css'

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Breadcrumb() {
  return (
    <div className="BreadcrumbContainer">
      <Breadcrumbs className="Breadcrumbs" aria-label="breadcrumb">
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
    </div>
  );
}

export default Breadcrumb;
