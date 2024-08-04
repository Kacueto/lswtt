// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import AboutUs from './pages/AboutUs'
import Donations from './pages/Donations';
import ContactUs from './pages/ContactUs';




function App() {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Podcast" element={<Podcast />} />
            <Route path= "/AboutUs" element={<AboutUs/>}/>
            <Route path= "/Donations" element={<Donations/>}/>
            <Route path= "/ContactUs" element={<ContactUs/>}/>
          </Routes> 
        
        
    </Router>
    
    </div>
  );
}

export default App;

