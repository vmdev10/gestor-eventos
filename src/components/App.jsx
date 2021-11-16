import './App.css'

import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Categories from '../pages/Categories';
import Category from '../pages/Category'
import City from '../pages/CityEvents'
import Event from '../pages/Event'
import Tickets from '../pages/Tickets';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';

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
