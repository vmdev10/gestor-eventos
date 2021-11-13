import './App.css'

import Navbar from '../components/Navbar/Navbar'
import Home from '../Pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
     </Router>
    </div>
  )
}

export default App;
