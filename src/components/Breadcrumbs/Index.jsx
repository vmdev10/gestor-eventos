import './Index.css'

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from 'react-router-dom';

import React from "react";

function Breadcrumb(props) {
  return (
    <div className="BreadcrumbContainer">
      <Breadcrumbs className="Breadcrumbs" aria-label="breadcrumb">
        {
          props.links?.map((link, index) => (
            <Link  key={index} to={link.path || ''}>
              { link.title }
            </Link>
          ))
        }
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
