import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Podcast.css';
import Footer from '../components/Footer'
import bebe from '../utils/BULLS/bebe.png'
import mediano from '../utils/BULLS/mediano.png'
import adulto from '../utils/BULLS/Adulto.png'

const Podcast = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div>
            <div className="podcasthome-container">
                <div className='container'>
                    <div className='pagepodcast-content'>
                        <h1>THE SPANISH PODCAST</h1>
                        <p> In this podcast... </p>

                    </div>
                </div>
                <div className='lvls-container1'>
                    <div className='lvl-container1' onClick={() => handleNavigation('/podcast/beginner')}>
                        <h1>BEGINNER <br/> SPANISH <br/> PODCAST</h1>
                        <img src={bebe} alt='beginner' />
                    </div>
                    <div className='lvl-container2' onClick={() => handleNavigation('/podcast/intermediate')}>
                        <h1>INTERMEDIATE <br/> SPANISH <br/> PODCAST</h1>
                        <img src={mediano} alt='mediano' />
                    </div>
                </div>
                <div className='lvls-container2'>
                    <div className='lvl-container3' onClick={() => handleNavigation('/podcast/advanced')}>
                        <h1>ADVANCED <br/> SPANISH <br/> PODCAST</h1>
                        <img src={adulto} alt='adulto' />
                    </div>
                </div>
                <Footer/>
            </div>
            
        </div>
    );
}

export default Podcast;
