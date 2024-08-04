import React from "react";
import './AboutUs.css';
import Footer from '../components/Footer'
import useHandleNavigation from '../hooks/useHandleNavigation';

const AboutUs = () => {
    const handleNavigation = useHandleNavigation();
    return (
        <div className="homeaboutus-container">
            <section className="aboutus-container1">
                <h1>What is this<br></br> club?</h1>
                <div className="aboutus-container1-content">
                    <p>
                        We are twins and the purpose of this club is to teach Spanish to everyone who decides to be part of this club.
                    </p>
                    <button className="aboutus-container1-button" onClick={() => handleNavigation('/ContactUs')}>Contact Us</button>
                    <button className="aboutus-container1-button1">Know the twins</button>
                </div>
            </section>
            <section className="Images-container">
                {/* Aquí puedes agregar tus imágenes */}
            </section>
            <section className="aboutus-container">
                <h1>The twins and their languages</h1>
                <p>Hello everyone, we are the twins Christian and Camilo Ochoa. We were born in Córdoba (Bolivar) in north Colombia. We are political scientists Graduated with an emphasis in public policies from the University del Norte Barranquilla.</p>
                <p>When we were children we were fascinated by the cultures of the world and little by little we noticed that our fascination grew more and more to the point of mastering 5 languages: Spanish (Native language), English, Portuguese, German and Italian.</p>
                <p>We are currently dedicated to business and political consultancy. In addition to that, we teach English part-time which we really love very much.</p>
                <p>Our love for teaching and foreign languages ​has grown so much that together we have decided to launch this project to share with you our knowledge and methods to learn and understand about our beautiful Ibero-American culture.</p>
                <p>We would like to dedicate ourselves wholeheartedly to this project full time, which is why we truly appreciate your donations and count on you to support this project and make it grow. Thank you very much! The Twins Christian and Camilo Ochoa.</p>
            </section>
            <Footer />
        </div>
    );
}

export default AboutUs;
