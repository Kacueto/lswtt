import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Podcast.css';

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
                    <div className='lvl-container' onClick={() => handleNavigation('/podcast/beginner')}>
                        <h1>BEGINNER <br/> SPANISH <br/> PODCAST</h1>
                    </div>
                    <div className='lvl-container' onClick={() => handleNavigation('/podcast/intermediate')}>
                        <h1>INTERMEDIATE <br/> SPANISH <br/> PODCAST</h1>
                    </div>
                </div>
                <div className='lvls-container2'>
                    <div className='lvl-container2' onClick={() => handleNavigation('/podcast/advanced')}>
                        <h1>ADVANCED <br/> SPANISH <br/> PODCAST</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Podcast;
