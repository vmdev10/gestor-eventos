import './App.css'

import Home from '../Pages/Home'
import Navbar from '../components/Navbar'
import Categories from '../Pages/Categories';
import Category from '../Pages/Category/Category'
import City from '../Pages/CityEvents/CityEvents'
import Event from '../Pages/Event/Event'
import Tickets from '../Pages/Tickets';
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={ <Navigate replace to="/signin"/> }/>
          <Route path="/home" element={<Home />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/city" element={<City />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/event/:id/ticket" element={<Tickets />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
     </Router>
    </div>
  )
}

export default App;
