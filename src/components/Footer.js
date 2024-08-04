import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useHandleNavigation from '../hooks/useHandleNavigation';
import useScrollToTop from '../hooks/useScrollToTop';
import './Footer.css';
import Logo from '../utils/logo.png';
import '../utils/fontAwasomeConfigure';

const Footer = () => {
    const handleNavigation = useHandleNavigation();
    const scrollToTop = useScrollToTop();

    return (
        <div className='footer-margin'>
            <div className='footer-container'>
                <div className='footer-content-top'>
                    <div className='footer-content-top-left'>
                        <img src={Logo} alt="Logo" onClick={scrollToTop} />
                        <p>Learn  and  sound
                            like a real
                            spanish   speaker.</p>
                    </div>
                    <div className='footer-content-top-mid'>
                        <div className='footer-content-top-mid-left'>
                            <h1 onClick={scrollToTop}>Home</h1>
                            <h1 onClick={() => handleNavigation('/Courses')}>Courses</h1>
                            <h1 onClick={() => handleNavigation('/Podcast')}>Podcast</h1>
                        </div>
                        <div className='footer-content-top-mid-right'>
                            <h1 onClick={() => handleNavigation('/AboutUs')}>About Us</h1>
                            <h1 onClick={() => handleNavigation('/ContactUs')}>Contact Us</h1>
                            <h1 onClick={() => handleNavigation('/Donations')}>Donations</h1>
                        </div>
                    </div>
                    <div className='footer-content-top-right'>
                        <FontAwesomeIcon icon={['fab', 'youtube']} size='3x' className='Icon-Brand' />
                        <FontAwesomeIcon icon={['fab', 'spotify']} size='3x' className='Icon-Brand' />
                        <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' className='Icon-Brand' />

                    </div>
                </div>
                <div className='footer-content-middle'>
                </div>
                <div className='footer-content-bottom'>
                    <div className='footer-content-bottom-left'>

                        <p className='copyright'>© 2021 Spanish Club With The Twins. All rights reserved.</p>
                    </div>
                    <div className='footer-content-bottom-right'>
                        <p onClick={() => handleNavigation('/CookiesPolicy')}>Cookies Policy</p>
                        <p onClick={() => handleNavigation('/PrivacyPolicy')}>Privacy Policy</p>
                        <p onClick={() => handleNavigation('/TermsAndConditions')}>Terms and Conditions</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;
