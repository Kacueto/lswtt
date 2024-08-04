// src/pages/Home.js
import React from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import twins3 from '../utils/TWINS/twins3.png';
import twins2 from '../utils/TWINS/twins2.png';

import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="container">
                <div className="content-container">
                    <h2>SPANISH CLUB WITH THE TWINS.</h2>
                    <div className="text-container">
                        <h1 style={{ color: '#AD1519' }}>Learn and sound</h1>
                        <h1 style={{ color: '#FABD00'}}>like a real</h1>
                        <h1 style={{ color: '#AD1519' }}>spanish speaker.</h1>
                    </div>
                    <button>RESOURCES</button>
                </div>
                <div className="image-container">
                    <img src={twins2} alt="twins" />
                </div>
            </div>
            <div className="resources-container">
                <div className="title-container">
                    <h1 >Resources</h1>
                </div>
                <Slider />
            </div>
            <div className="podcast-container">
                <div className="title-container">
                    <h1 >Podcast</h1>
                </div>
                <div className='container'>
                <div className="image-container">
                    <img src={twins3} alt="twins" />
                </div>
                    <div className='podcast-content'>
                        <h1>WELCOME TO OUR PODCAST</h1>
                        <p>Listen to our podcast and learn Spanish with us. We will teach you how to speak Spanish like a native speaker. Lets Go!!!</p>
                        <button>Go To Podcast</button>
                    </div>
                </div>
            </div>
            <div className='contactUs-container'>
                <div className='title-container'>
                    <h1>Contact Us</h1>
                </div>
                <div className='imagecontactUs-container'>
                    <div className='contactUs-content'>
                        <p>We are always happy to hear from our listeners. If you have any questions, comments, or suggestions, please feel free to contact us.</p>
                        <a href="mailto:info@ejemplo.com">ContactUs@correo.com</a>
                        <p>You want to contact us quickly, use the following shortcut</p>
                        <button>Contact Us</button>
                    </div>
                    <div className='contactUs-image'>
                        <img src='https://www.programaradialanalizando.com/wp-content/uploads/2023/03/HmCSxT74UDqTKNfM1KgLmRCrjrut4TbkoiEBrPrX.png' alt='contactUs' width='80%' height='80%' />
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    );
}

export default Home;
