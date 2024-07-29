import React from "react";
import './AboutUs.css';
import Footer from '../components/Footer'
import useHandleNavigation from '../hooks/useHandleNavigation';

const AboutUs = () => {
    const handleNavigation = useHandleNavigation();
    return (
        
        <div className="homeaboutus-container">
            <div className="aboutus-container1">
                <h1>What is this<br></br> club?</h1>
                <div className="aboutus-container1-content">
                    <p>
                    We are twins and the purpose of this club is to teach Spanish to everyone who decides to be part of this club.
                    </p>
                    <button  className="aboutus-container1-button" onClick={() => handleNavigation('/ContactUs')}>Contact Us</button>
                    <button className="aboutus-container1-button1">Know the twins</button>
                </div>
            </div>
            <div className="aboutus-container">
                <h1>About Us</h1>
                <p>Spanish Club With The Twins is a platform that aims to help people learn Spanish in a fun and interactive way. Our goal is to provide you with the tools and resources you need to become fluent in Spanish. Whether you are a beginner or an advanced learner, we have something for everyone. Our courses are designed to help you improve your listening, speaking, reading, and writing skills. We also offer a podcast where you can listen to native speakers and practice your listening skills. So why wait? Join Spanish Club With The Twins today and start your journey to fluency!</p>
            </div>
            <Footer />
        </div>
    );

}

export default AboutUs