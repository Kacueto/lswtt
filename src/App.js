// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import AboutUs from './pages/AboutUs'




function App() {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        <body>
          <Routes>
            <Route path="/" exact element={<Home />} />  
            <Route path="/Podcast" element={<Podcast />} />
            <Route path= "/AboutUs" element={<AboutUs/>}/>
            <Route path="/ContactUs" element={<ContactUs />} /> 
           
          </Routes> 
           
        </body>
        
    </Router>
    
    </div>
  );
}

export default App;

