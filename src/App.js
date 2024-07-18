// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        <body>
          <Routes>
            <Route path="/" exact element={<Home />} />  
            <Route path="/Podcast" element={<Podcast />} />
          </Routes>  
        </body>
        
    </Router>
    <Footer />
    </div>
  );
}

export default App;

