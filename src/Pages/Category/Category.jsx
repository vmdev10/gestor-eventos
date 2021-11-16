import "./Category.css";

import Breadcrumb from "../../components/Breadcrumbs/Index";
import Event from '../../components/Events/Events'
import {
  useParams
} from 'react-router-dom';

import React from "react";

function Category() {
  const { id } = useParams();
  const links = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: '/categories',
      title: 'Categorias'
    },
    {
      path: `/categories/${id}`,
      title: 'Categorias'
    },
  ];

  return (
    <>
      <div className="CategoryContainer">
        <div className="Category">

          <Breadcrumb links={links}/>
          
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

      <Event event='Eventos online em alta' categoryId={id} />
      <Event event='Começa em breve' categoryId={id}/>
      <Event event='Tecnologia' categoryId={id}/>
    </>
  );
}

export default Category;
