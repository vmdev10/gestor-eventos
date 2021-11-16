import './Categories.css'

import CategoryCard from '../components/Cards/Activities/ActivityCard'

import categoriesData from '../store/categories'

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoriesData)
  }, [])

  return (
    <div className="CategoriesComponent">
      { categories.map((currentCategory, index) => (
        <Link to={`/categories/${currentCategory.id}`} key={index}>
          <CategoryCard
            imageUrl={currentCategory.imageUrl}
            category={currentCategory.category}
          />
        </Link>
      )) }
    </div>
  )
}

export default Categories