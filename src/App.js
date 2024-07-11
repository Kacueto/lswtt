// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <body>
          <Routes>
            <Route path="/" exact element={<Home />} />  
          </Routes>  
        </body>

      </div>
    </Router>
  );
}

export default App;

