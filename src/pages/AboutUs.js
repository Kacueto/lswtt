import React from "react";
import './AboutUs.css';
import Footer from '../components/Footer'

const AboutUs = () => {
    return (
        <div className="homeaboutus-container">
            <div className="aboutus-container1">
                <h1>What is this<br></br> club?</h1>
                <div className="aboutus-container1-content">
                    <p>
                    We are twins and the purpose of this club is to teach Spanish to everyone who decides to be part of this club. We have a lot of experience in teaching and we have a lot of resources to help you learn Spanish in a fun and interactive way. We have courses, podcasts, and a lot of other resources that will help you improve your Spanish skills. So why wait? Join Spanish Club With The Twins today and start your journey to fluency!
                    </p>
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