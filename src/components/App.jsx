import './App.css'

import Home from '../Pages/Home'
import Navbar from '../components/Navbar/Navbar'
import Categories from '../Pages/Categories';
import Category from '../Pages/Category/Category'
import City from '../Pages/CityEvents/CityEvents'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />}></Route>
          <Route path="/city" element={<City />}></Route>
        </Routes>
     </Router>
    </div>
  )
}

export default App;
