import "./Category.css";
import categoriesData from '../../store/categories'

import Breadcrumb from "../../components/Breadcrumbs";
import Event from '../../components/Events'
import {
  useParams
} from 'react-router-dom';

import React, { useState, useEffect } from "react";

function Category() {
  const { id } = useParams();

  const [currentCategory, setCurrentCategory] = useState({})

  useEffect(() => {
    const currentCategory = categoriesData.find((category) => category.id == id)

    setCurrentCategory(currentCategory)
  }, [])

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
      title: currentCategory.category
    },
  ];

  return (
    <>
      <div className="CategoryContainer">
        <div className="Category">

          <Breadcrumb links={links}/>
          
          <div className="CategoryPresentation">
            <h3>{ currentCategory.category }</h3>
            <p>
              { currentCategory.description }
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
