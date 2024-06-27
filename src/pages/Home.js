// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="container">
                <div className="content-container">
                    {/* Contenido del contenedor blanco */}
                    <h2>LEARN SPANISH WITH THE TWINS</h2>
                    <h1>Este es un texto de ejemplo dentro del contenedor blanco.</h1>
                    <button>resources</button>
                </div>   
            </div>
            <div clasName = "resources-container">
            
            </div>

        </div>
    );
}

export default Home;
